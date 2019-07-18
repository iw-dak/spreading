import React, { Component } from 'react';
import FaqContext from './FaqContext';
import API from '../../api';


const api = new API()
api.createEntity({ name: 'faqs' })

class FaqProvider extends Component {

    state = {
        allFaqs: [],
        fetchFaqs: () => {
            api.endpoints.faqs.getAll().then(({data}) => {
                this.setState({
                    allFaqs: data
                });
            }).catch(error => {
                console.log("fetchAllFAQs", error.message);
            })
        }
    }
    render() {
        return (
            <FaqContext.Provider  value={this.state}>
                {this.props.children}
            </FaqContext.Provider>
         );
    }
}


export default FaqProvider;

