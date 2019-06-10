import React from 'react';

const LatestItem = ({ latest }) => <>
    <div className="col-4">
        <a href={latest.link}>
            {latest.title}
        </a>
    </div>
</>

export default LatestItem;
