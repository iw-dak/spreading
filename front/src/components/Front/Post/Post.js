import React, { Component } from 'react';
import PostContext from '../../../context/posts/PostContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Post.scss';
import Spinner from '../../Spinner/Spinner';
import { formatDate, AuthStore } from '../../../helpers';
import CommentList from './Comment/CommentList';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CommentContext from '../../../context/comments/CommentContext';
import parse from 'html-react-parser';
class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comment: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.fetchPost(this.props.match.params.slug).then(() => {
                this.props.updateViews(this.props.post.views, this.props.post.id);
            });
        }, 500);

        AOS.init()
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.postComment({
            "user_id": AuthStore.getUser().id,
            "post_id": this.props.post.id,
            "content": this.state.comment,
            "status": false
        }).then(() => {
            this.setState({
                comment: ""
            })
        }).catch((error) => {
            console.log(error);
        })
    }

    handleChange = (data) => {
        this.setState({
            comment: data
        });
    }

    handleVote = () => {
        this.props.updateVotes(this.props.post.votes, this.props.post.id);
    }

    render() {
        let { post, registerStatus } = this.props;
        if (!post) { return <Spinner />; }
        let date = formatDate(post.created_at);

        return (
            <div className="Post container">
                <h1 className="mt-4 mb-4">{post.title}</h1>
                <div className="post-item-meta mt-4 mb-4">
                    <div>Par <a href={process.env.REACT_APP_URL + '/collaborators/' + post.user.username} className="username">{post.user.firstname}</a></div>
                    <div><i className="fas fa-hourglass-half"></i><span className="ml-1">5 min</span></div>
                    <div><i className="fas fa-eye ml-1"></i><span className="ml-1">{post.views}</span></div>
                    <div><i className="fas fa-heart"></i><span className="ml-1">{post.votes}</span></div>
                    <div><time dateTime={post.created_at}>{date}</time></div>
                </div>

                <div className="poster mb-4">
                    <img src={`https://lorempixel.com/1600/600?t=${Date.now()}`} alt="Un article qui a un titre dans la vie" />
                </div>

                <div className="content mb-4">
                    {parse(post.content)}
                </div>

                <div className="row">
                    <div className="col-12">
                        <strong className="commentCount">{post.nb_comments} commentaire{post.nb_comments > 1 && "s"}</strong>
                    </div>
                </div>

                <div className="row mt-4">
                    <button onClick={this.handleVote} className="btn btn-dark">Voter pour cet article</button>
                </div>

                <div className="row d-flex flex-column-reverse flex-sm-column-reverse flex-md-row mb-4">
                    <div className="col-12 col-sm-12 col-md-7">
                        <div className="CommentList comments">
                            <CommentList comments={post.comments} />
                        </div>
                    </div>

                    <div className={`col-12 col-sm-12 ${post.nb_comments === 0 ? 'col-md-12' : 'col-md-5'}`}>
                        {AuthStore.isAuthenticated() ? <>
                            <h2 className="mt-4 mb-4">Ecrire un commentaire</h2>

                            <form onSubmit={this.handleSubmit}>
                                {registerStatus && <div class="alert alert-success" role="alert">
                                    {registerStatus}
                                </div>}

                                <CKEditor
                                    editor={ClassicEditor}
                                    data={this.state.comment}
                                    onInit={editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        this.handleChange(data);
                                    }}
                                    onBlur={editor => {
                                        console.log('Blur.', editor);
                                    }}
                                    onFocus={editor => {
                                        console.log('Focus.', editor);
                                    }}
                                />

                                <button type="submit" className="btn btn-secondary mt-4">Poster</button>
                            </form>
                        </>
                            : <>
                                <div className="mt-4">
                                    <span>Connectez-vous dès maintenant pour faire un commentaire</span>
                                </div>
                                <div className="mt-4">
                                    <a href={`${process.env.REACT_APP_URL}/connexion`} className="btn btn-dark">Se connecter</a>
                                </div>
                            </>}
                    </div>
                </div>
            </div>
        );
    }
}

export default React.forwardRef((props, ref) => (
    <CommentContext.Consumer>
        {({ register, registerStatus }) => <PostContext.Consumer>
            {({ post, fetchPost, updateViews, updateVotes }) =>
                <Post
                    {...props}
                    post={post}
                    fetchPost={fetchPost}
                    updateViews={updateViews}
                    updateVotes={updateVotes}
                    registerStatus={registerStatus}
                    postComment={(comment) => register(comment)}
                    ref={ref}
                />
            }
        </PostContext.Consumer>}
    </CommentContext.Consumer>
));
