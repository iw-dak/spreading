import React, { Component } from 'react';
import FaqList from './FaqList';
import FaqContext from "../../../context/faqs/FaqContext";
import AOS from "aos";
import Spinner from "../../Spinner/Spinner";



class FaqListContainer extends Component {

    componentDidMount() {

        setTimeout(() => {
            this.context.fetchFaqs();
        }, 50);

        AOS.init()
    }

    render() {
        /*console.log(this.context.allFaqs);*/
        if (!(this.context.allFaqs && this.context.allFaqs.length > 0)) {

            return <Spinner />
        }

        return <>
            <div className="container">
                    <h3 className="mx-auto mt-4 mb-4">FAQ</h3>
                </div>
            <FaqList faqList={this.context.allFaqs} />
        </>
    }
}

FaqListContainer.contextType = FaqContext;

export default FaqListContainer;
