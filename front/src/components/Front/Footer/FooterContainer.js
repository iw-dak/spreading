import React, { Component } from 'react';
import Footer from './Footer';
import './Footer.scss';

class FooterContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            languages: [
                {
                    name: "PHP",
                    link: process.env.REACT_APP_URL + "/articles/tag/php",
                },
                {
                    name: "Dart",
                    link: process.env.REACT_APP_URL + "/articles/tag/dart",
                },
                {
                    name: "Javascript",
                    link: process.env.REACT_APP_URL + "/articles/tag/javascript",
                },
                {
                    name: "HTML",
                    link:process.env.REACT_APP_URL + "/articles/tag/html",
                },
                {
                    name: "CSS",
                    link: process.env.REACT_APP_URL + "/articles/tag/css",
                }
            ],
            frameworks: [
                {
                    name: "Symfony",
                    link: process.env.REACT_APP_URL + "/articles/tag/symfony",
                },
                {
                    name: "Laravel",
                    link: process.env.REACT_APP_URL + "/articles/tag/laravel",
                },
                {
                    name: "Ruby On Rails",
                    link: process.env.REACT_APP_URL + "/articles/tag/ruby-on-rails",
                },
                {
                    name: "Django",
                    link: process.env.REACT_APP_URL + "/articles/tag/django",
                },
                {
                    name: "Zend Framework",
                    link: process.env.REACT_APP_URL + "/articles/tag/zend-framework",
                }
            ],
            informations: [
                {
                    name: "Contact",
                    link: "#"
                },
                {
                    name: "FAQ",
                    link: process.env.REACT_APP_URL + "/faq"
                },
                {
                    name: "Mentions légales",
                    link: "#"
                },
                {
                    name: "Conditions d'utilisation",
                    link: "#"
                }
            ],
            accounts: [
                {
                    name: "Se connecter",
                    link: "/connexion"
                },
                {
                    name: "S'inscrire",
                    link: "/inscription"
                },
            ]
        };
    }

    render() {
        return <Footer data={this.state} />
    }
}

export default FooterContainer;
