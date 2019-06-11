import React from 'react';
import HeaderMenu from './HeaderMenu';

const Header = ({ menus }) => <>
    <div className="Header d-flex flex-column">
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex flex-column align-items-center">
                    <a className="logo" href="/">
                        <span className="sitename">Spreading</span>
                    </a>
                    <span className="headline">Idea for everyone</span>
                </div>
            </div>

            <hr className="m-2" />

            <HeaderMenu menus={menus} />
        </div>
    </div>
</>

export default Header;
