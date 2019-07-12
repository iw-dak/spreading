import React from 'react';
import HeaderContainer from './components/Front/Header/HeaderContainer';
import HomeContainer from './components/Front/Home/HomeContainer';
import FooterContainer from './components/Front/Footer/FooterContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PostProvider from './context/PostProvider';

function App() {
    return <>
        <PostProvider>
            <HeaderContainer />
            <Router>
                <div>
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </div>
            </Router>
            <FooterContainer />
        </PostProvider>
    </>;
}

export default App;
