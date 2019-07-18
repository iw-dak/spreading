import React from 'react';
import { Route } from "react-router-dom";
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import HomeContainer from './Home/HomeContainer';
import HeaderContainer from '../Front/Header/HeaderContainer';
import FooterContainer from '../Front/Footer/FooterContainer';
import Post from '../Front/Post/Post';
import FaqListContainer from "../Front/Faq/FaqListContainer";
import Error404 from '../Errors/Error404';

function FrontContainer() {
    return <>
        <HeaderContainer />
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/connexion" component={Login} />
        <Route exact path="/inscription" component={Register} />
        <Route path="/article/:slug" component={Post} />
        <Route path="/faq" component={FaqListContainer} />
        <Route exact path="/404" component={Error404} />
        <FooterContainer />
    </>;
}

export default FrontContainer;
