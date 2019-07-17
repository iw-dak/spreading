import React, {Component} from 'react';
import Header from './Header';
import './Header.scss';
import AOS from "aos";
import axios from 'axios';


class HeaderContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menus: [
                {
                    name: "Mis en avant",
                    link: process.env.REACT_APP_URL + "/articles/category/mis-en-avant"
                },
                {
                    name: "Framework",
                    link: process.env.REACT_APP_URL + "/articles/category/frameworks"
                },
                {
                    name: "Langages",
                    link: process.env.REACT_APP_URL + "/articles/category/languages"
                }
            ]
        };
    }


    render() {
        return <Header menus={this.state.menus}/>
    }
}

export default HeaderContainer;
