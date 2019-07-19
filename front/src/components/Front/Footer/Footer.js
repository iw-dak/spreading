import React from 'react';

import API from '../../../api';


const api = new API()
api.createEntity({ name: 'newsletters' })

export class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            message: false,
            error_message: false
        }
    }

    handleChange = e => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        // this.context.authenticate(this.state);

        if (this.state.email === '') {
            console.log('email vide');
            this.setState({
                message: false,
                error_message: "Merci de réessayer en vérifiant votre adresse email."
            })
            return;
        }

        api.endpoints.newsletters.create({ "email": this.state.email }).then(({ data }) => {
            console.log(data);
            this.setState({
                error_message: false,
                message: "Votre abonnement à la newsletter a été pris en compte."
            })

        }).catch((error) => {
            // Error 😨
            console.log(error.response);
            if (error.response) {
                this.setState({
                    message: false,
                    error_message: error.response.data.message
                })
            } else if (error.request) {
                this.setState({
                    message: false,
                    error_message: error.request.data.message
                })
            } else {
                this.setState({
                    message: false,
                    error_message: "Une erreur est survenue, merci de rééssayer utlérieurement..."
                })
            }
        });
    }


    render() {
        return <>
            <div className="Footer container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="container footer-menu-wrapper">
                            <div className="row w-100">
                                <div className="col-12 col-md-3">
                                    <h3>Languages</h3>
                                    <ul className="footer-menu-item-group">
                                        {this.props.data.languages.map((menu, key) => <li key={key}><a
                                            href={menu.link}>{menu.name}</a>
                                        </li>)}
                                    </ul>
                                </div>

                                <div className="col-12 col-md-3">
                                    <h3>Frameworks</h3>
                                    <ul className="footer-menu-item-group">
                                        {this.props.data.frameworks.map((menu, key) => <li key={key}><a
                                            href={menu.link}>{menu.name}</a></li>)}
                                    </ul>
                                </div>

                                <div className="col-12 col-md-3">
                                    <h3>Informations</h3>
                                    <ul className="footer-menu-item-group">
                                        {this.props.data.informations.map((menu, key) => <li key={key}><a
                                            href={menu.link}>{menu.name}</a></li>)}
                                    </ul>
                                </div>

                                <div className="col-12 col-md-3">
                                    <h3>Compte</h3>
                                    <ul className="footer-menu-item-group">
                                        {this.props.data.accounts.map((menu, key) => <li key={key}><a
                                            href={menu.link}>{menu.name}</a>
                                        </li>)}
                                        <li><a href='/' data-toggle="modal"
                                            data-target="#exampleModal">S'abonner</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">

                            <div className="modal-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input name="email" className="form-control" placeholder="Email"
                                            value={this.state.email} onChange={this.handleChange} type="email" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block"> S'abonner
                                        </button>
                                    </div>

                                    {this.state.message && <div className="alert alert-success" role="alert">
                                        {this.state.message}
                                    </div>}

                                    {this.state.error_message && <div className="alert alert-danger" role="alert">
                                        {this.state.error_message}
                                    </div>}

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mb-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 d-flex flex-column align-items-center">
                                    <a className="sf-logo" href="/">
                                        <img src={process.env.REACT_APP_URL + '/images/logo.png'} alt="Un article qui a un titre dans la vie" />
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 footer-menu-description">
                                    <p>© 2019 Spreading. Tous les droits sont réservés. L'utilisation de ce site constitue une acceptation de notre accord d'utilisation et de notre politique de confidentialité. Le contenu de ce site ne peut être reproduit, distribué, transmis, mis en cache ou utilisé de quelque manière que ce soit sans l'autorisation écrite préalable de Spreading.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}

export default Footer;
