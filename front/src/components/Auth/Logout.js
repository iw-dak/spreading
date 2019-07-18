import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../../context/users/UserContext';
import './Auth.scss';
import { AuthStore } from '../../helpers';

class Logout extends Component {

  componentDidMount() {
    AuthStore.logout();
    window.location.reload();
  }

  render() {
    return <Redirect to={{ pathname: "/" }} />

  }
}

Logout.contextType = UserContext;

export default Logout;
