import React, { Component } from 'react';
import './PostsCategory.scss';
import PostContext from '../../../context/posts/PostContext';
import PostListContainer from "../Home/PostList/PostListContainer";
import AOS from "aos";

class PostsCategory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    componentDidMount() {
        if (this.props.match.params.type === 'category') {
            this.setState({
                title: 'la catégorie'
            })
            setTimeout(() => {
                this.context.fetchByCategory(this.props.match.params.id);
            }, 1000);
        } else if (this.props.match.params.type === 'tag') {
            this.setState({
                title: 'le tag'
            })
            setTimeout(() => {
                this.context.fetchByTag(this.props.match.params.id);
            }, 1000);
        }
        AOS.init()
    }

    render() {
        let posts = this.context.posts;
        let name = this.context.name;

        return (
            <div className="container text-center">
                {name ? <h1 className="mt-4 mb-4">Articles dans {this.state.title}  {name}</h1> : ''}
                <PostListContainer postListItems={posts} />
            </div>
        );

    }
}
PostsCategory.contextType = PostContext;

export default PostsCategory;
