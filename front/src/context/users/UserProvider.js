import React, { Component } from 'react';
import axios from 'axios';
import UserContext from './UserContext';
import API from '../../api';
import { AuthStore } from '../../helpers';

const api = new API()
api.createEntity({ name: 'users' })

class UserProvider extends Component {

    state = {
        status: false,
        authenticate: (user) => {
            axios.post(`${process.env.REACT_APP_API_URL}/login`,
                JSON.stringify(user),
                { headers: { 'Content-Type': 'application/json', } }
            ).then(({ data }) => {
                AuthStore.storeToken(data.access_token).then(() => {
                    axios.get(`${process.env.REACT_APP_API_URL}/users?email=${user.email}`).then(({ data }) => {
                        AuthStore.storeUserInfo(data).then(() => {
                            this.setState({
                                status: 'authenticated'
                            });
                        }).catch((error) => {
                            console.log("[Store user]", error);
                        });
                    }).catch((error) => {
                        console.log("[Store token]", error);
                    });
                })

            }).catch((error) => {
                if (error.response.status === 401) {
                    this.setState({
                        status: 'Identifiants invalides, réessayez'
                    });
                }
            });
        },
        register: (user) => {

        }
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;
