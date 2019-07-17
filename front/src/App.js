import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminContainer from './components/Admin/AdminContainer';
import FrontContainer from './components/Front/FrontContainer.js';
import PostProvider from './context/posts/PostProvider';
import UserProvider from './context/users/UserProvider';
import CommentProvider from './context/comments/CommentProvider';

function App() {
    return <>
        <UserProvider>
            <PostProvider>
                <CommentProvider>
                    <Router>
                        <div className="ContentWrapper">
                            <Switch>
                                <Route path="/admin" component={AdminContainer} />
                                <Route path="/" component={FrontContainer} />
                            </Switch>
                        </div>
                    </Router>
                </CommentProvider>
            </PostProvider>
        </UserProvider>
    </>;
}

export default App;
