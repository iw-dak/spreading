import React, { Component } from 'react';
import LatestsContainer from './Latests/LatestsContainer';

class HomeContainer extends Component {

    render() {
        return <>
            <div className="Home">
                <LatestsContainer />
            </div>
        </>;
    }
}

export default HomeContainer;
