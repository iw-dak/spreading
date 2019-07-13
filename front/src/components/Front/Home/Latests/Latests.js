import React, { Component} from 'react';
import LatestItem from './LatestsItem';
import PostContext from '../../../../context/PostContext';
import './Latests.scss';

class Latests  extends Component {

    componentDidMount() {
        this.context.fetchLatests();
    }

    render(){
        if (!(this.context.latests && this.context.latests.length > 0)) {
            return 'Loading...'
        }
        return this.context.latests.map((latest, key) => (
            <LatestItem key={key} latest={latest} />
        ))
    }
}

Latests.contextType = PostContext;

export default Latests;
