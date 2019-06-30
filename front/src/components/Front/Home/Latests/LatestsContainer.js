import React, { Component } from 'react';
import Latests from './Latests';
import { connect } from 'react-redux';
import { fetchLatests } from '../../../../redux/actions/postActions'

import './Latests.scss';

class LatestsContainer extends Component {

    componentDidMount() {
        this.props.fetchLatests();
    }

    render() {
        if (!(this.props.latests.length > 0)) {
            return 'Loading...'
        }

        return (
            <Latests latests={this.props.latests} />
        );
    }
}

const mapStateToProps = state => {
    return {
        latests: state.postReducer.latests
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLatests: () => dispatch(fetchLatests()),
    }
};

LatestsContainer = connect(mapStateToProps, mapDispatchToProps)(LatestsContainer);

export default LatestsContainer;
