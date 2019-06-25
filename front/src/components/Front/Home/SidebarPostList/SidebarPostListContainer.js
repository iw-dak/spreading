import React, { Component } from 'react';
import SidebarPostList from './SidebarPostList';

class SidebarContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postListItems: [
                {
                    title: "Comment manger sainement avec des recettes simples ?",
                    link: "#",
                    datetime: "18/03/2019",
                    category: "Food",
                    user: {
                        firstname: "Kaba",
                        lastname: "CONDE"
                    }
                },
                {
                    title: "Que va devenir la politique de demain avec l’écologie ?",
                    link: "#",
                    datetime: "06/02/2019",
                    category: "Politique",
                    user: {
                        firstname: "Souad",
                        lastname: "TOURE"
                    }
                },
                {
                    title: "La fabrication des produits cosmétiques réinventés",
                    link: "#",
                    datetime: "04/01/2019",
                    category: "Science",
                    user: {
                        firstname: "Karim",
                        lastname: "CONDE"
                    }
                },
                {
                    title: "La blockchain dans le monde du web",
                    link: "#",
                    datetime: "04/01/2019",
                    category: "Science",
                    user: {
                        firstname: "Karim",
                        lastname: "CONDE"
                    }
                }
            ]
        };
    }

    render() {
        return <>
            <SidebarPostList sidebarPostList={this.state.postListItems} />
        </>;
    }
}

export default SidebarContainer;
