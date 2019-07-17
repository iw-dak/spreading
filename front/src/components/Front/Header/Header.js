import React from 'react';
import HeaderMenu from './HeaderMenu';
import { AuthStore } from '../../../helpers';
import Nav from "react-bootstrap/Nav";

let isAuthUser = AuthStore.isAuthenticated();
let authUser = AuthStore.getUser();

const Header = ({ menus }) => <>
    <div className="Header d-flex flex-column">
        <div className="container">
            <div className="row mb-2">
                <div className="col-8 justify-content-left col-md-12 d-flex flex-column align-items-left align-items-md-center">
                    <a className="sf-logo" href="/">
                        <span className="sitename">Spreading</span>
                    </a>
                    <span className="headline">Ideas for everyone</span>
                </div>

                <div className="col-4 d-flex d-md-none">
                    <nav className="navbar navbar-dark burger-menu ml-auto">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </div>

                <div id="navbarToggleExternalContent" className="col-12 d-none d-md-flex collapse justify-content-center">
                    <nav className="navbar ">
                        <HeaderMenu menus={menus} />
                        {(!isAuthUser) ?

                        <div className="dropdown divlog">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-user"></i>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/connexion">Se connecter</a>
                                <a className="dropdown-item" href="/inscription">S'inscrire</a>
                            </div>
                        </div>
                            :
                            <div className="divlog">
                                <a href="/admin/profile" className="userProfileAccess">
                                <i className="fas fa-user"></i>
                                {authUser.firstname} {authUser.lastname}
                                </a>
                                <a href="/deconnexion" className="userProfileAccess">
                                    <i className="fas fa-power-off"></i>
                                </a>
                            </div>}
                    </nav>
                </div>

            </div>
        </div>
    </div>
</>

export default Header;
