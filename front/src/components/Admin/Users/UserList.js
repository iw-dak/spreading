import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Table from 'react-bootstrap/Table';
import API from "../../../api";
import axios from 'axios';
import Spinner from '../../Spinner/Spinner';

const myApi = new API()
myApi.createEntity({ name: 'users' });

class UserList extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      offset: 0,
    }
  }

  handleClick(e, user) {
    user.roles = e.target.id;
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

  loadUsersFromServer() {
    axios.all([
      myApi.endpoints.users.getSpecific({ id: 'count' }),
      myApi.endpoints.users.getSpecific({ id: `16/${this.state.offset}` })
    ]).then(axios.spread((count, users) => {
      this.setState({
        pageCount: count.data / 15,
        users: users.data
      });
    })).catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.loadUsersFromServer();
  }

  handlePageClick = data => {

    let selected = data.selected;
    let offset = Math.ceil(selected * 15);

    this.setState({ offset: offset }, () => {
      this.loadUsersFromServer();
    });
  };

  render() {
    if (!(this.state.users && this.state.users.length > 0)) {
      return <Spinner />
    }
    return <>
      <div id="users-back" className="container">
        <h3 className="sp-back-title">Liste des utilisateurs</h3>
        <div className="table-div">
          <Table striped bordered hover variant="dark" size="sm">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th className="pl-3">Prénom</th>
                <th className="pl-3">Email</th>
                <th className="pl-3">Rôle</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td className="text-center user">{user.id}</td>
                    <td className="pl-3">{user.firstname}</td>
                    <td className="pl-3">{user.email}</td>
                    <td className="pl-3">
                      {(user.roles === "admin") ? "Administrateur" : "Utilisateur"}
                    </td>
                    <td className="text-center">
                      {(user.roles === "admin") ? <button type="button" id="subscriber" onClick={(e) => this.handleClick(e, user)} className="btn btn-warning mx-4" >Rétrograder</button> : <button type="button" id="admin" onClick={(e) => this.handleClick(e, user)} className="btn btn-success mx-4" >Promouvoir</button>}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
        <div className="react-paginate">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
            disabledClassName={'disable'}
          />
        </div>
      </div>
    </>;
  }

}

export default UserList;
