import React from 'react';
import HeaderContainer from './components/Front/Header/HeaderContainer';
import HomeContainer from './components/Front/Home/HomeContainer';
import FooterContainer from './components/Front/Footer/FooterContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PostProvider from './context/posts/PostProvider';
import UserProvider from './context/users/UserProvider';
import { PrivateRoute } from './helpers';
import Error404 from './components/Errors/Error404';
import Post from './components/Front/Post/Post';

function App() {
    return <>
        <UserProvider>
            <PostProvider>
                <HeaderContainer />
                <Router>
                    <div className="ContentWrapper">
                        <Route exact path="/" component={HomeContainer} />
                        <Route exact path="/connexion" component={Login} />
                        <Route exact path="/inscription" component={Register} />
                        <Route path="/article/:slug" component={Post} />
                        <PrivateRoute exact path="/admin/posts" component={HomeContainer} />
                        <Route path="*" component={Error404} />
                    </div>
                </Router>
                <FooterContainer />
            </PostProvider>
        </UserProvider>
    </>;
}

export default App;
