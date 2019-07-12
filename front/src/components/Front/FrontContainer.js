import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import HomeContainer from './Home/HomeContainer';
import HeaderContainer from '../Front/Header/HeaderContainer';
import FooterContainer from '../Front/Footer/FooterContainer';

function FrontContainer() {
    return <>
        <HeaderContainer />
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <FooterContainer />
    </>;
}

export default FrontContainer;
