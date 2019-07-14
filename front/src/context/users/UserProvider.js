import React, { Component } from 'react';
import axios from 'axios';
import UserContext from './UserContext';
import API from '../../api';
import { AuthStore } from '../../helpers';

const api = new API()
api.createEntity({ name: 'users' })

class UserProvider extends Component {

    state = {
        register_error: false,
        status: false,
        authenticate: (user) => {
            axios.post(`${process.env.REACT_APP_API_URL}/login`,
                JSON.stringify(user),
                { headers: { 'Content-Type': 'application/json', } }
            ).then(({ data }) => {
                AuthStore.storeToken(data.access_token).then(() => {
                    api.endpoints.users.getSpecific({ id: `?email=${user.email}` }).then(({ data }) => {
                        AuthStore.storeUserInfo(data).then(() => {
                            this.setState({
                                status: 'authenticated'
                            });
                        });
                    }).catch((error) => {
                        // Error 😨
                        if (error.response) {
                            if (error.response.status === 500) {
                                this.setState({
                                    status: 'Une erreur inattendue s\'est produite, réessayez ou contactez un administrateur'
                                });
                            }
                        } else if (error.request) {
                            console.log(error.request);
                        } else {
                            // Something happened in setting up the request and triggered an Error
                            console.log('Error', error.message);
                        }
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

            this.setState({
                register_error: false,
                status: false
            });

            // Verification
            if (user.password !== user.password_confirmation) {
                this.setState({
                    register_error: "Vos mots de passe ne sont pas identiques"
                });
                return;
            }

            if (user.password.length < 6) {
                this.setState({
                    register_error: "Votre mot de passe doit faire 6 caractères minimum"
                });
                return;
            }

            if (user.firstname === '' || user.lastname === '' || user.password === '') {
                this.setState({
                    register_error: "Saisissez tous les champs"
                });
                return;
            }

            // api registration
            let userRegister = { firstname: user.firstname, lastname: user.lastname, email: user.email, password: user.password };
            let userLogin = { email: user.email, password: user.password };

            api.endpoints.users.create(userRegister).then(({ data }) => {
                this.state.authenticate(userLogin);
            }).catch((error) => {
                // Error 😨
                if (error.response) {
                    if (error.response.status === 422) {
                        this.setState({
                            status: error.response.data
                        });
                    }
                    if (error.response.status === 500) {
                        this.setState({
                            status: "Une erreur inattendue s'est produite, réessayez ou contactez un administrateur"
                        });
                    }
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request and triggered an Error
                    console.log('Error', error.message);
                }
            });
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
