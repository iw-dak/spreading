import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeBackoffice from './HomeBackoffice';
import PostList from './PostList';
import CommentList from './CommentList';

function AdminContainer({ location }) {
    return <>
        <Route exact path='/admin' component={HomeBackoffice} />
        <Route exact path='/admin/posts' component={PostList} />
        <Route exact path='/admin/comments' component={CommentList} />
    </>;
}

export default AdminContainer;
