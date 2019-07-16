import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../../context/users/UserContext';
import './Auth.scss';
import { AuthStore } from '../../helpers';

class Logout extends Component {

  componentDidMount() {
    AuthStore.logout();
  }

  render() {

    if (!AuthStore.isAuthenticated()) {
      return <Redirect to={{ pathname: "/" }} />
    }
    else {
      return <p className="mx-auto">La déconnexion a échoué...</p>
    }
  }
}

Logout.contextType = UserContext;

export default Logout;
