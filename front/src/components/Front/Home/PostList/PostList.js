import React from 'react';
import PostItem from './PostListItem';
import './PostList.scss';

const PostList = ({ postList }) => <>
    {postList.map((postItem, key) => (
        <PostItem key={key} postItem={postItem} />
    ))}
</>

export default PostList;
