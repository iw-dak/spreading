import React from 'react';
import HomeBackoffice from './Home/HomeBackoffice';
import Header from './Header/Header';
import PostList from './Posts/PostList';
import UserList from './Users/UserList';
import CommentList from './Comments/CommentList';
import { PrivateRoute, AdminRoute } from './../../helpers';

import './Back.scss';

function AdminContainer({ location }) {
    return <>
        <Header />
        <div id="back">
            <PrivateRoute exact path='/admin' component={HomeBackoffice} />
            <PrivateRoute exact path='/admin/posts' component={PostList} />
            <AdminRoute exact path='/admin/users' component={UserList} />
            <AdminRoute exact path='/admin/comments' component={CommentList} />
        </div>
    </>;
}

export default AdminContainer;
