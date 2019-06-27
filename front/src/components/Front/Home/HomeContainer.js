import React, { Component } from 'react';
import LatestsContainer from './Latests/LatestsContainer';
import SidebarPostListContainer from './SidebarPostList/SidebarPostListContainer';
import PostListContainer from './PostList/PostListContainer';
import { connect } from 'react-redux';
import { fetchLatestsByCategory } from '../../../redux/actions/postActions';

class HomeContainer extends Component {

    componentDidMount() {
        this.props.fetchLatestsByCategory();
    }

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
                        <div className="col-12 col-xl-8">
                            <div className="row">
                                <div className="col-12 mt-4 mb-4">
                                    <h2>Mis en avant</h2>
                                </div>
                            </div>

                            <div className="row">
                                <PostListContainer postListItems={this.props.latestFeatured} />
                            </div>

                            <div className="row">
                                <div className="col-12 mt-4 mb-4">
                                    <h2>Frameworks</h2>
                                </div>
                            </div>

                            <div className="row">
                                <PostListContainer postListItems={this.props.latestFrameworks} />
                            </div>

                            <div className="row">
                                <div className="col-12 mt-4 mb-4">
                                    <h2>Languages</h2>
                                </div>
                            </div>

                            <div className="row">
                                <PostListContainer postListItems={this.props.latestLanguages} />
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

const mapStateToProps = state => {
    return {
        latestFeatured: state.postReducer.latestFeatured,
        latestFrameworks: state.postReducer.latestFeatured,
        latestLanguages: state.postReducer.latestLanguages
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLatestsByCategory: () => dispatch(fetchLatestsByCategory()),
    }
};

HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export default HomeContainer;
