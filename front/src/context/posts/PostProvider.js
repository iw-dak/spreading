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
        post: null,
        posts: [],
        name: '',
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
                if (featuredError.response) {
                    console.log(featuredError.response.data);
                    console.log(featuredError.response.status);
                    console.log(featuredError.response.headers);
                } else if (featuredError.request) {
                    console.log(featuredError.request);
                } else {
                    console.log('featuredError', featuredError.message);
                }
                console.log(featuredError);

                if (frameworksError.response) {
                    console.log(frameworksError.response.data);
                    console.log(frameworksError.response.status);
                    console.log(frameworksError.response.headers);
                } else if (frameworksError.request) {
                    console.log(frameworksError.request);
                } else {
                    console.log('frameworksError', frameworksError.message);
                }
                console.log(frameworksError);

                if (languagesError.response) {
                    console.log(languagesError.response.data);
                    console.log(languagesError.response.status);
                    console.log(languagesError.response.headers);
                } else if (languagesError.request) {
                    console.log(languagesError.request);
                } else {
                    console.log('languagesError', languagesError.message);
                }
                console.log(languagesError);
            });
        },
        fetchPost: (slug) => {
            api.endpoints.posts.getSpecific({ id: slug }).then(({ data }) => {
                this.setState({
                    post: data
                });
            }).catch(error => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
        },
        fetchByCategory: (id) => {

            axios.get(`${process.env.REACT_APP_API_URL}/categories/` + id,
                { headers: { 'Content-Type': 'application/json', } }
            ).then(({ data }) => {
                this.setState({
                    posts: data["posts"],
                    name: data["name"]
                });

            }).catch((error) => {
                // Error 😨
                if (error.response) {
                    if (error.response.status === 500) {
                        this.setState({
                            status: 'Une erreur inattendue s\'est produite, réessayez ou contactez un administrateur'
                        });
                    }
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request and triggered an Error
                    console.log('Error', error.message);
                }
            });
        },

        fetchByTag: (id) => {

            axios.get(`${process.env.REACT_APP_API_URL}/tags/` + id,
                { headers: { 'Content-Type': 'application/json', } }
            ).then(({ data }) => {
                this.setState({
                    posts: data["posts"],
                    name: data["name"]
                });
            }).catch((error) => {
                // Error 😨
                if (error.response) {
                    if (error.response.status === 500) {
                        this.setState({
                            status: 'Une erreur inattendue s\'est produite, réessayez ou contactez un administrateur'
                        });
                    }
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request and triggered an Error
                    console.log('Error', error.message);
                }
            });
        }
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
