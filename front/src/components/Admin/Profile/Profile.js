import React, { Component } from 'react';
import API from "../../../api";
import UserContext from '../../../context/users/UserContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Profile.scss';
import FlashMassage from 'react-flash-message';
import { AuthStore } from '../../../helpers';

const myApi = new API()
myApi.createEntity({ name: 'users' });

class Profile extends Component {

  constructor() {
    super();
    this.state = {
      user: [],
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      alert: { type: '', label: '' }
    }
  }

  handleClick(e, user) {
    user.status = 1;
    myApi.endpoints.users.update(user).then(({ data }) => {
      this.setState({
        users: this.state.users.map((userItem) => {
          if (userItem.id === data.id) {
            return data;
          }
          return userItem;
        })
      })
    }).catch(error => {
      console.log("error", error);
    });
  }

  handleChange = e => {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  }

  edit(e) {
    e.preventDefault();

    //in case the values haven't been updated
    let authUser = AuthStore.getUser();
    let firstname = (this.state.firstname !== '') ? this.state.firstname : this.state.user.firstname;
    let lastname = (this.state.lastname !== '') ? this.state.lastname : this.state.user.lastname;
    let email = (this.state.firstname !== '') ? this.state.firstname : this.state.user.email;

    const fields = { id: authUser.id, firstname: firstname, lastname: lastname, email: email, password: this.state.password };

    myApi.endpoints.users.update(fields).then(({ data }) => {
      this.setState({
        alert: { type: 'success', label: 'Le profile a bien été modifié' }
      })
    }).catch(error => {
      console.log("error", error);
      this.setState({
        alert: { type: 'danger', label: 'Une erreur est survenue lors de l\'enregistrement de vos modification, veuillez réessayer.' }
      })
    });
  }

  componentDidMount() {
    let authUser = AuthStore.getUser();

    myApi.endpoints.users.getSpecific({ id: `${authUser.id}` }).then(({ data }) => {
      this.setState({
        user: data
      })
    }).catch(error => {
      console.log("error", error);
    });
  }

  render() {
    return <>
      <div id="profile" className="container">
        <h3 className="mx-auto mt-4 mb-4">Modifier mon profile</h3>
        {(this.state.alert.label !== '') &&
          <FlashMassage duration={5000} persistOnHover={true}>
            <div className={`alert alert-${this.state.alert.type} text-center`}>
              {this.state.alert.label}
            </div>
          </FlashMassage>}
        <div className="update-user mb-2 mx-auto">
          <Form onSubmit={(e) => this.edit(e)}>
            <Form.Group>
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="text" name="firstname" value={this.state.user.firstname} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" name="lastname" value={this.state.user.lastname} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={this.state.user.email} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" name="password" onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirmer le mot de passe</Form.Label>
              <Form.Control type="password" name="password_confirmation" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Modifier
            </Button>
          </Form>
        </div>
      </div>
    </>;
  }
}
Profile.contextType = UserContext;

export default Profile;
