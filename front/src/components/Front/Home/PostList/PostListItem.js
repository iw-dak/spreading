import React from 'react';
import { formatDate } from '../../../../helpers';

const PostListItem = ({ postItem }) => <>
    <div className="col-12 post-item mb-4 d-flex align-items-center flex-column flex-md-row" data-aos="fade-up" data-aos-duration="1000">
        <div className="post-item-image">
            <a href={process.env.REACT_APP_URL + '/article/' + postItem.slug}>
                <img src={`${postItem.image}?t=${Date.now()}`} alt="Un article qui a un titre dans la vie" />
            </a>
        </div>

        <div className="post-item-content p-4">
            <div className="post-item-meta">
                <div>Par <a href={process.env.REACT_APP_URL + '/collaborators/' + postItem.user.username} className="username">{postItem.user.firstname}</a></div>
                <div><i className="fas fa-hourglass-half"></i><span className="ml-1">{postItem.readtime} min</span></div>
                <div><i className="fas fa-eye ml-1"></i><span className="ml-1">{postItem.views}</span></div>
                <div><i className="fas fa-heart"></i><span className="ml-1">{postItem.votes}</span></div>
                <div><time dateTime="10/06/2019 à 02:30:22">{formatDate(postItem.created_at)}</time></div>
            </div>
            <a href={process.env.REACT_APP_URL + '/article/' + postItem.slug}>
                <h3 className="post-item-title mt-2 mb-2 post-title">{postItem.title}</h3>
            </a>
            <p className="post-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie molestie nisl, eu scelerisque turpis tempus at. Nam luctus ultrices imperdiet...</p>
        </div>
    </div>
</>

export default PostListItem;
