import React, { Component } from 'react';
import SidebarPostList from './SidebarPostList';
import { connect } from 'react-redux';
import { fetchPopulars } from '../../../../redux/actions/postActions'

class SidebarContainer extends Component {

    componentDidMount() {
        this.props.fetchPopulars();
    }

    render() {
        if (!(this.props.populars && this.props.populars.length > 0)) {
            return 'Loading...'
        }

        return <>
            <SidebarPostList sidebarPostList={this.props.populars} />
        </>;
    }
}

const mapStateToProps = state => {
    return {
        populars: state.postReducer.populars
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPopulars: () => dispatch(fetchPopulars()),
    }
};

SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);

export default SidebarContainer;
