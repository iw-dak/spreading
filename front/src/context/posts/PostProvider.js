import React, { Component } from 'react';
import axios from 'axios';
import PostContext from './PostContext';
import API from '../../api';

const api = new API()
api.createEntity({ name: 'posts' })

class PostProvider extends Component {

    state = {
        latests: [],
        populars: [],
        latestFeatured: [],
        latestFrameworks: [],
        fetchLatests: () => {
            api.endpoints.posts.getSpecific({ id: 'latests' }).then(({ data }) => {
                this.setState({
                    latests: data
                });
            }).catch(error => {
                console.log("fetchLatests", error.message);
            })
        },
        fetchPopulars: () => {
            api.endpoints.posts.getSpecific({ id: 'populars' }).then(({ data }) => {
                this.setState({
                    populars: data
                });
            }).catch(error => {
                console.log("fetchPopulars", error.message);
            })
        },
        fetchLatestsByCategory: () => {
            axios.all([
                api.endpoints.posts.getSpecific({ id: 'get-latest-posts-by-category/mis-en-avant' }),
                api.endpoints.posts.getSpecific({ id: 'get-latest-posts-by-category/frameworks' }),
                api.endpoints.posts.getSpecific({ id: 'get-latest-posts-by-category/languages' }),
            ]).then(axios.spread((featured, frameworks, languages) => {
                this.setState({
                    latestFeatured: featured.data,
                    latestFrameworks: frameworks.data,
                    latestLanguages: languages.data,
                });
            })).catch((featuredError, frameworksError, languagesError) => {
                console.log("featuredError ====>", featuredError);
                console.log("frameworksError ====>", frameworksError);
                console.log("languagesError ====>", languagesError);
            });
        },
    }

    render() {
        return (
            <PostContext.Provider value={this.state}>
                {this.props.children}
            </PostContext.Provider>
        );
    }
}

export default PostProvider;
