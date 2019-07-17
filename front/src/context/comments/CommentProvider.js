import React, { Component } from 'react';
import CommentContext from './CommentContext';
import API from '../../api';

const api = new API()
api.createEntity({ name: 'comments' })

class CommentProvider extends Component {

    state = {
        registerStatus: false,
        register: (comment) => {
            return new Promise((resolve, reject) => {
                api.endpoints.comments.create(JSON.stringify(comment)).then(({ data }) => {
                    this.setState({
                        registerStatus: "Votre commentaire a été enregistré, il sera visible après validation"
                    });
                    resolve(data);
                }).catch(error => {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    reject(error);
                })
            });
        }
    }

    render() {
        return (
            <CommentContext.Provider value={this.state}>
                {this.props.children}
            </CommentContext.Provider>
        );
    }
}

export default CommentProvider;
