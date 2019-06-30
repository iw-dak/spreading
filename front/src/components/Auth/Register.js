import React, { Component } from 'react';

class Register extends Component {

    render() {
        return <>
            <div className="container authr">
                <div className="col-10 col-sm-6 col-lg-4 mx-auto mt-4 mb-4">
                    <div className="card">
                        <article className="card-body">
                            <h5 className="card-title mb-4 mt-1">Inscription</h5>
                            <form>
                                <div className="form-group">
                                    <label>Nom*</label>
                                    <input name="" className="form-control" placeholder="Nom" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Prénom*</label>
                                    <input name="" className="form-control" placeholder="Prénom" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Email*</label>
                                    <input name="" className="form-control" placeholder="Email" type="email" />
                                </div>

                                <div className="form-group">
                                    <label>Mot de passe*</label>
                                    <input className="form-control" placeholder="******" type="password" />
                                </div>

                                <div className="form-group">
                                    <label>Confirmer mot de passe*</label>
                                    <input className="form-control" placeholder="******" type="password" />
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
export default Register;
