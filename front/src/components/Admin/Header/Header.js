import React, { Component } from 'react';
import './Header.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Header extends Component {

    render() {
        return <>
            <Navbar bg="light" variant="light" id="back-nav">
                <a className="navbar-brand ml-6" href="/">Spreading</a>
                <Nav className="mx-auto">
                    <Nav.Link href="/admin">Dashboard</Nav.Link>
                    <Nav.Link href="/admin/users">Utilisateurs</Nav.Link>
                    <Nav.Link href="/admin/posts">Articles</Nav.Link>
                    <Nav.Link href="/admin/comments">Commentaires</Nav.Link>
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </>;
    }
}

export default Header;
