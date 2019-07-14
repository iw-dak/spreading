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
                    link: "#"
                },
                {
                    name: "Dart",
                    link: "#"
                },
                {
                    name: "Javascript",
                    link: "#"
                },
                {
                    name: "HTML",
                    link: "#"
                },
                {
                    name: "CSS",
                    link: "#"
                }
            ],
            frameworks: [
                {
                    name: "Symfony",
                    link: "#"
                },
                {
                    name: "Laravel",
                    link: "#"
                },
                {
                    name: "Ruby On Rails",
                    link: "#"
                },
                {
                    name: "Django",
                    link: "#"
                },
                {
                    name: "Zend Framework",
                    link: "#"
                }
            ],
            informations: [
                {
                    name: "Contact",
                    link: "#"
                },
                {
                    name: "FAQ",
                    link: "#"
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
                    link: "/login"
                },
                {
                    name: "S'inscrire",
                    link: "/register"
                },
                {
                    name: "S'abonner",
                    link: "#"
                },
            ]
        };
    }

    render() {
        return <Footer data={this.state} />
    }
}

export default FooterContainer;
