import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeBackoffice from './Home/HomeBackoffice';
import Header from './Header/Header';
import PostList from './Posts/PostList';
import UserList from './Users/UserList';
import CommentList from './Comments/CommentList';
import './Back.scss';

function AdminContainer({ location }) {
    return <>
        <Header />
        <div id="back">
            <Route exact path='/admin' component={HomeBackoffice} />
            <Route exact path='/admin/posts' component={PostList} />
            <Route exact path='/admin/users' component={UserList} />
            <Route exact path='/admin/comments' component={CommentList} />
        </div>
    </>;
}

export default AdminContainer;
