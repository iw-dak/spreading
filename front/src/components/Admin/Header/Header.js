import React, { Component } from 'react';
import './Header.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { AuthStore } from '../../../helpers';

class Header extends Component {

    render() {
        let authUser = AuthStore.getUser();
        let isAuthUser = AuthStore.isAuthenticated();

        return <>
            <Navbar bg="light" variant="light" id="back-nav">
                <a className="navbar-brand ml-6" href="/">Spreading</a>
                <Nav className="mx-auto">
                    <Nav.Link href="/admin">Dashboard</Nav.Link>
                    {(authUser && authUser.roles === 'admin') && <Nav.Link href="/admin/users">Utilisateurs</Nav.Link>}
                    <Nav.Link href="/admin/posts">Articles</Nav.Link>
                    {(authUser && authUser.roles === 'admin') && <Nav.Link href="/admin/tags">Tags</Nav.Link>}
                    <Nav.Link href="/admin/comments">Commentaires</Nav.Link>
                    {(isAuthUser) &&
                        <div className="divlog">
                            <Nav.Link href="/admin/profile" className="userProfileAccess">
                                <i className="fas fa-user"></i>
                                {authUser.firstname} {authUser.lastname}
                            </Nav.Link>
                            <a href="/deconnexion" className="userProfileAccess">
                                <i className="fas fa-power-off"></i>
                            </a>
                        </div>
                    }
                </Nav>
            </Navbar>
        </>;
    }
}

export default Header;
