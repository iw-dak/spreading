import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Auth.scss';
import UserContext from '../../context/users/UserContext';
import { AuthStore } from '../../helpers';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
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
        this.context.authenticate(this.state);
    }

    render() {
        if (this.context.status === 'authenticated' || AuthStore.isAuthenticated()) {
            return <Redirect to={{ pathname: "/admin/posts" }} />
        }

        return <>
            <div className="container auth">
                <div className="col-10 col-sm-6 col-lg-4 mx-auto mt-4 mb-4">
                    <div className="card">
                        <article className="card-body">
                            <a href="/connexion" className="float-right btn btn-outline-primary">Inscription</a>
                            <h5 className="card-title mb-4 mt-1">Connexion</h5>
                            <form onSubmit={this.handleSubmit}>

                                {this.context.status && <div className="alert alert-danger" role="alert">
                                    {this.context.status}
                                </div>}

                                <div className="form-group">
                                    <label>Email*</label>
                                    <input name="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleChange} type="email" />
                                </div>

                                <div className="form-group">
                                    <a className="float-right" href="/forgotten-password">Oublié ?</a>
                                    <label>Mot de passe*</label>
                                    <input className="form-control" name="password" placeholder="******" type="password" value={this.state.password} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <div className="checkbox">
                                        <label><input type="checkbox" /> Enregistrer le mot de passe </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block"> Se connecter  </button>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </div>
        </>
    }
}

Login.contextType = UserContext;

export default Login;
