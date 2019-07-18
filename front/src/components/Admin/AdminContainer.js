import React from 'react';
import HomeBackoffice from './Home/HomeBackoffice';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import PostList from './Posts/PostList';
import UserList from './Users/UserList';
import CommentList from './Comments/CommentList';
import TagList from './Tags/TagList';
import Comment from './Comments/Comment';
import Profile from './Profile/Profile';
import { PrivateRoute, AdminRoute } from './../../helpers';
import PostEdit from './PostEdit/PostEdit';
import './Back.scss';


function AdminContainer({ location }) {
    return <>
        <Header />
        <div id="back">
            <PrivateRoute exact path='/admin' component={HomeBackoffice} />
            <PrivateRoute exact path='/admin/posts' component={PostList} />
            <PrivateRoute exact path='/admin/posts/add' component={PostEdit} />
            <PrivateRoute exact path='/admin/tags' component={TagList} />
            <AdminRoute exact path='/admin/users' component={UserList} />
            <AdminRoute exact path='/admin/profile' component={Profile} />
            <AdminRoute exact path='/admin/comments' component={CommentList} />
            <AdminRoute exact path='/admin/comments/:id' component={Comment} />
        </div>
        <Footer />
    </>;
}

export default AdminContainer;
