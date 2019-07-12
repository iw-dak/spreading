import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminContainer from './components/Admin/AdminContainer';
import FrontContainer from './components/Front/FrontContainer.js';


function App() {
    return <>
        <Router>
            <Switch>
                <Route path="/admin" component={AdminContainer} />
                <Route path="/" component={FrontContainer} />
            </Switch>
        </Router>

    </>;
}

export default App;
