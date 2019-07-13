import React, { Component } from 'react';
import SidebarPostListContainer from './SidebarPostList/SidebarPostListContainer';
import PostListContainer from './PostList/PostListContainer';
import Latests from './Latests/Latests';
import PostContext from '../../../context/PostContext';

class HomeContainer extends Component {

    componentDidMount() {
        this.context.fetchLatestsByCategory();
    }

    render() {

        return <>
            <div className="Home">
                <div className="container">
                    <div className="row">
                        <Latests />
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-8">
                            <div className="row">
                                <div className="col-12 mt-4 mb-4">
                                    <h2>Mis en avant</h2>
                                </div>
                            </div>

                            <div className="row">
                                <PostListContainer postListItems={this.context.latestFeatured} />
                            </div>

                            <div className="row">
                                <div className="col-12 mt-4 mb-4">
                                    <h2>Frameworks</h2>
                                </div>
                            </div>

                            <div className="row">
                                <PostListContainer postListItems={this.context.latestFrameworks} />
                            </div>

                            <div className="row">
                                <div className="col-12 mt-4 mb-4">
                                    <h2>Languages</h2>
                                </div>
                            </div>

                            <div className="row">
                                <PostListContainer postListItems={this.context.latestLanguages} />
                            </div>
                        </div>

                        <div className="col-12 col-xl-4">
                            <div className="row">
                                <div className="col-12 mt-4 mb-4">
                                    <h2>Les plus populaires</h2>
                                </div>
                            </div>

                            <SidebarPostListContainer />
                        </div>
                    </div>
                </div>
            </div>
        </>;
    }
}

HomeContainer.contextType = PostContext;

export default HomeContainer;
