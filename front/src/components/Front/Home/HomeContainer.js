import React, { Component } from 'react';
import LatestsContainer from './Latests/LatestsContainer';
import SidebarPostListContainer from './SidebarPostList/SidebarPostListContainer';
import PostListContainer from './PostList/PostListContainer';

class HomeContainer extends Component {

    render() {
        return <>
            <div className="Home">
                <div className="container">
                    <div className="row">
                        <LatestsContainer />
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <div className="col-12 mt-4 mb-4">
                                    <h2>Mis en avant</h2>
                                </div>
                            </div>

                            <div className="row">
                                <PostListContainer />
                            </div>

                            <div className="row">
                                <div className="col-12 mt-4 mb-4">
                                    <h2>Frameworks</h2>
                                </div>
                            </div>

                            <div className="row">
                                <PostListContainer />
                            </div>

                            <div className="row">
                                <div className="col-12 mt-4 mb-4">
                                    <h2>Languages</h2>
                                </div>
                            </div>

                            <div className="row">
                                <PostListContainer />
                            </div>
                        </div>

                        <div className="col-4">
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

export default HomeContainer;
