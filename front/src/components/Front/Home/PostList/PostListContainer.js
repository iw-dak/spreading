import React, { Component } from 'react';
import PostList from './PostList';
import './PostList.scss';

class PostListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postListItems: [
                {
                    title: "Symfony vs Laravel, lequel choisir pour développer une application robuste ?",
                    link: "#",
                    datetime: "04/01/2019",
                    category: "Science",
                    user: {
                        firstname: "Karim",
                        lastname: "CONDE"
                    }
                },
                {
                    title: "La blockchain dans le monde du web",
                    link: "#",
                    datetime: "04/01/2019",
                    category: "Science",
                    user: {
                        firstname: "Karim",
                        lastname: "CONDE"
                    }
                }
            ]
        };
    }

    render() {
        return <>
            <PostList postList={this.state.postListItems} />
        </>
    }
}

export default PostListContainer;
