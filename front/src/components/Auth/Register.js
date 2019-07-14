import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../../context/users/UserContext';
import './Auth.scss';
import { AuthStore } from '../../helpers';

class Register extends Component {
    constructor() {
        super();

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            password_confirmation: ''
        };
    }

    handleChange = e => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.context.register(this.state);
    }

    render() {

        if (this.context.status === 'registered' || AuthStore.isAuthenticated()) {
            return <Redirect to={{ pathname: "/admin/posts" }} />
        }

        return <>
            <div className="container auth">
                <div className="col-10 col-sm-6 col-lg-4 mx-auto mt-4 mb-4">
                    <div className="card">
                        <article className="card-body">
                            <h5 className="card-title mb-4 mt-1">Inscription</h5>
                            <form onSubmit={this.handleSubmit}>

                                {this.context.register_error && <div className="alert alert-danger" role="alert">
                                    {this.context.register_error}
                                </div>}

                                <div className="form-group">
                                    <label>Prénom*</label>
                                    <input name="firstname" className="form-control" placeholder="Prénom" type="text" value={this.state.name} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Nom*</label>
                                    <input name="lastname" className="form-control" placeholder="Nom" type="text" value={this.state.lastname} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Email*</label>
                                    <input name="email" className="form-control" placeholder="Email" type="email" value={this.state.email} onChange={this.handleChange} />
                                    {this.context.status.email && <div className="alert alert-danger mt-2" role="alert">
                                        {this.context.status.email[0]}
                                    </div>}
                                </div>

                                <div className="form-group">
                                    <label>Mot de passe*</label>
                                    <input name="password" className="form-control" placeholder="*******" type="password" value={this.state.password} onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label>Confirmer mot de passe*</label>
                                    <input name="password_confirmation" className="form-control" placeholder="*******" type="password" value={this.state.password_confirmation} onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block"> S'inscrire  </button>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </div>
        </>;
    }
}

Register.contextType = UserContext;

export default Register;
