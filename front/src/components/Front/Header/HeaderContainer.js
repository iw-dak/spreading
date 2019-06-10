import React, { Component } from 'react';
import Header from './Header';


class HeaderContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menus: [
                {
                    name: "Informatique",
                    link: "#"
                },
                {
                    name: "Sciences",
                    link: "#"
                },
                {
                    name: "Politique",
                    link: "#"
                },
                {
                    name: "Philosiphie",
                    link: "#"
                },
                {
                    name: "Santé",
                    link: "#"
                },
                {
                    name: "Alimentation",
                    link: "#"
                }
            ]
        };
    }
    render() {
        return <Header menus={this.state.menus}/>
    }
}

export default HeaderContainer;
