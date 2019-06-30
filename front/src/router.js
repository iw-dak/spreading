
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

const routing = (
    <Router>
        <div>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </div>
    </Router>
)
export default routing;
