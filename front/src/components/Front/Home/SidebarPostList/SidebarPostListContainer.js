import React, { Component } from 'react';
import SidebarPostList from './SidebarPostList';
import PostContext from '../../../../context/posts/PostContext';

class SidebarContainer extends Component {


    componentDidMount() {
        this.context.fetchPopulars()
    }

    render() {
        if (!(this.context.populars && this.context.populars.length > 0)) {
            return 'Loading...'
        }

        return <>
            <SidebarPostList sidebarPostList={this.context.populars} />
        </>;
    }
}

SidebarContainer.contextType = PostContext;

export default SidebarContainer;
