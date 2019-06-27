import React, { Component } from 'react';
import './Auth.scss';

class Login extends Component {

    render() {
        return <>
            <div className="container">
                <div className="col-10 col-sm-6 col-lg-4 mx-auto mt-4 mb-4">
                    <div className="card">
                        <article className="card-body">
                            <a href="/register" className="float-right btn btn-outline-primary">Inscription</a>
                            <h5 className="card-title mb-4 mt-1">Connexion</h5>
                            <form>
                                <div className="form-group">
                                    <label>Email*</label>
                                    <input name="" className="form-control" placeholder="Email" type="email" />
                                </div>

                                <div className="form-group">
                                    <a className="float-right" href="/forgotten-password">Oublié ?</a>
                                    <label>Mot de passe*</label>
                                    <input className="form-control" placeholder="******" type="password" />
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
export default Login;
