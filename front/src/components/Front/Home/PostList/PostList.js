import React from 'react';
import LatestItem from './PostListItem';
import './PostList.scss';

const PostList = ({ postList }) => <>
    <div className="container">
        <div className="row">
            {postList.map((latest, key) => (
                <LatestItem key={key} latest={latest} />
            ))}
        </div>
    </div>
</>

export default PostList;
