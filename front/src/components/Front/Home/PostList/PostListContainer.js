import React, { Component } from 'react';
import PostList from './PostList';
import './PostList.scss';

class PostListContainer extends Component {

    render() {

        if (!(this.props.postListItems && this.props.postListItems.length > 0)) {
            return 'Loading...'
        }

        return <>
            <PostList postList={this.props.postListItems} />
        </>
    }
}

export default PostListContainer;
