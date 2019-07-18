import React from 'react';
import { Route } from "react-router-dom";
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Logout from '../Auth/Logout';
import HomeContainer from './Home/HomeContainer';
import HeaderContainer from '../Front/Header/HeaderContainer';
import FooterContainer from '../Front/Footer/FooterContainer';
import Post from '../Front/Post/Post';
import Error404 from '../Errors/Error404';
import PostsCategory from "./PostsCategory/PostsCategory";
import './Front.scss';

function FrontContainer() {
    return <>
        <HeaderContainer />
        <div id="front">
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/connexion" component={Login} />
            <Route exact path="/inscription" component={Register} />
            <Route path="/article/:slug" component={Post} />
            <Route path="/articles/:type/:id" component={PostsCategory} />
            <Route exact path="/404" component={Error404} />
            <Route exact path="/deconnexion" component={Logout} />
        </div>
        <FooterContainer />
    </>;
}

export default FrontContainer;
