import React from 'react';
import FaqItem from './FaqItem';


const FaqList = ({ faqList }) => <>
<div className="FaqItem container">
{faqList.map((faqItem, key) => (
    <FaqItem key={key} faqItem={faqItem} />
))}
</div>
</>

export default FaqList;
