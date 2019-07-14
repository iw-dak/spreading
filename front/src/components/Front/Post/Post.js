import React, { Component } from 'react';
import PostContext from '../../../context/posts/PostContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spinner from '../../Spinner/Spinner';
import './Post.scss';
import { formatDate } from '../../../helpers';
import CommentList from './Comment/CommentList';

class Post extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.context.fetchPost(this.props.match.params.slug);
        }, 1000);

        AOS.init()
    }

    render() {
        let post = this.context.post;

        if (!post) {
            return <Spinner />;
        }
        let date = formatDate(post.created_at)

        return (
            <div className="Post container">
                <h1 className="mt-4 mb-4">{post.title}</h1>
                <div className="post-item-meta mt-4 mb-4">
                    <div>Par <a href={process.env.REACT_APP_URL + '/collaborators/' + post.user.username} className="username">{post.user.firstname}</a></div>
                    <div><i className="fas fa-hourglass-half"></i><span className="ml-1">5 min</span></div>
                    <div><i className="fas fa-eye ml-1"></i><span className="ml-1">23</span></div>
                    <div><i className="fas fa-heart"></i><span className="ml-1">20</span></div>
                    <div><time dateTime={post.created_at}>{date}</time></div>
                </div>

                <div className="poster mb-4">
                    <img src={`https://lorempixel.com/1600/600?t=${Date.now()}`} alt="Un article qui a un titre dans la vie" />
                </div>

                <div className="content mb-4">
                    {post.content}
                </div>

                <div className="comments">
                    <span className="commentCount">{post.nb_comments} commentaires</span>
                    <CommentList comments={post.comments} />
                </div>
            </div>
        );
    }
}

Post.contextType = PostContext;

export default Post;
