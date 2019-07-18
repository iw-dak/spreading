import React from 'react';
import HeaderMenu from './HeaderMenu';

const Header = ({ menus }) => <>
    <div className="Header d-flex flex-column">
        <div className="container">
            <div className="row mb-2">
                <div className="col-8 justify-content-center col-md-12 d-flex flex-column align-items-center align-items-md-center">
                    <a className="sf-logo mt-2" href="/">
                        <img src={process.env.REACT_APP_URL + '/images/logo.png'} alt="Logo" />
                    </a>
                    <span className="headline text-center mr-3 mt-1">Ideas for everyone</span>
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
                    </nav>
                </div>

            </div>
        </div>
    </div>
</>

export default Header;
