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

function App() {
    return <>
        <UserProvider>
            <PostProvider>
                <HeaderContainer />
                <Router>
                    <div>
                        <Route exact path="/" component={HomeContainer} />
                        <Route exact path="/connexion" component={Login} />
                        <Route exact path="/inscription" component={Register} />
                        <PrivateRoute exact path="/admin/posts" component={HomeContainer} />
                    </div>
                </Router>
                <FooterContainer />
            </PostProvider>
        </UserProvider>
    </>;
}

export default App;
