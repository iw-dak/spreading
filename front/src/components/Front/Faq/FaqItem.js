import React from 'react';
import "./FaqItem.scss";




const FaqItem = ({faqItem}) => {

        return <>

            <div id="accordion">
                <div className="card question">
                    <div className="card-header " id="headingOne">
                        <h5 className="mb-0">
                            <button className ="btn btn-link" data-toggle="collapse" data-target={`#collapse`+faqItem.id} aria-expanded="false" aria-controls="collapseOne">
                            {faqItem.question}
                            </button>
                        </h5>
                    </div>
                    <div id={`collapse`+faqItem.id} className="collapse answers" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            {faqItem.answer}
                        </div>
                    </div>
                </div>
            </div>

        </>

}

export default FaqItem;
