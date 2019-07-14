import React, { Component } from 'react';

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(70vh)'
};

class Error404 extends Component {
    render() {
        return (
            <div className="container" style={style}>
                <h1>Page introuvable</h1>
            </div>
        );
    }
}

export default Error404;
