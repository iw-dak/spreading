import React, { Component } from 'react';
import PostContext from '../../../context/posts/PostContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Post.scss';
import Spinner from '../../Spinner/Spinner';
import { formatDate } from '../../../helpers';
import CommentList from './Comment/CommentList';
import RichTextEditor from '../../RichEditor/RichTextEditor';
import { convertToRaw } from 'draft-js';
class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editorState: null,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.context.fetchPost(this.props.match.params.slug);
        }, 500);

        AOS.init()
    }

    handleChange = editorState => {
        const contentState = editorState.getCurrentContent();
        const blocks = JSON.parse(JSON.stringify(convertToRaw(contentState)));
        console.log('content state', blocks.blocks[0].text);
       // console.log("Handle Change", editorState);
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

                <div className="row">
                    <div className="col-12">
                        <strong className="commentCount">{post.nb_comments} commentaire{post.nb_comments > 1 && "s"}</strong>
                    </div>
                </div>

                <div className="row d-flex flex-column-reverse flex-sm-column-reverse flex-md-row mb-4">
                    <div className="col-12 col-sm-12 col-md-7">
                        <div className="CommentList comments">
                            <CommentList comments={post.comments} />
                        </div>
                    </div>

                    <div className={`col-12 col-sm-12 ${post.nb_comments === 0 ? 'col-md-12' : 'col-md-5'}`}>
                        <h2 className="mt-4 mb-4">Ecrire un commentaire</h2>
                        <RichTextEditor
                            editorState={this.state.editorState}
                            onChange={this.handleChange}
                            onBlur={this.handleChange}
                            buttonLabel="Commenter"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

Post.contextType = PostContext;

export default Post;
