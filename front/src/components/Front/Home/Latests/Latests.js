import React, { Component } from 'react';
import LatestItem from './LatestsItem';
import PostContext from '../../../../context/posts/PostContext';
import './Latests.scss';

class Latests extends Component {

    componentDidMount() {
        this.context.fetchLatests();
    }

    render() {

        return this.context.latests.map((latest, key) => (
            <LatestItem key={key} latest={latest} />
        ))
    }
}

Latests.contextType = PostContext;

export default Latests;
