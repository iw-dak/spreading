import React, { Component } from 'react';
import Latests from './Latests';
import { connect } from 'react-redux';
import { fetchLatests } from '../../../../redux/actions/postActions'

import './Latests.scss';
class LatestsContainer extends Component {

    componentDidMount() {
        console.log('ynic');

        this.props.fetchLatests();

        console.log('ynic');
        console.log(this.props.latests);
    }

    render() {
        console.log('mais oui ou non ?')
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
