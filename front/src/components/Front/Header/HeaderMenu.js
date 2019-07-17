import React from 'react';
import {AuthStore} from "../../../helpers";

let isAuthUser = AuthStore.isAuthenticated();
let authUser = AuthStore.getUser();

const HeaderMenu = ({menus}) => <>

    <ul className="header-menu d-flex flex-column flex-md-row align-items-sm-center  justify-content-center">
        {menus.map((menu, key) => <li className="menu-item" key={key}><a href={menu.link}>{menu.name}</a></li>)}
        <li>
            <hr/>
        </li>
        {(!isAuthUser) ?

            <li className="dropdown divlog">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-user"></i>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/connexion">Se connecter</a>
                    <a className="dropdown-item" href="/inscription">S'inscrire</a>
                </div>
            </li>
            :
            <React.Fragment >
                <li className="divlog">
                    <a href="/admin/profile divlog" className="userProfileAccess">
                        <i className="fas fa-user"></i>
                        {authUser.firstname} {authUser.lastname}
                    </a>
                </li>
                <li>
                    <hr/>
                </li>
                <li>
                    <a href="/deconnexion" className="userProfileAccess">
                        <i className="fas fa-power-off"></i>
                    </a>
                </li>
            </React.Fragment>
        }
    </ul>
</>

export default HeaderMenu;
