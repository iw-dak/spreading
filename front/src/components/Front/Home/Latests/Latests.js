import React from 'react';
import LatestItem from './LatestsItem';

const Latests = ({ latests }) => <>
    <div className="container-fluid">
        {latests.map((latest, key) => (
            <div key={key} className="row">
                <LatestItem latest={latest} />
            </div>
        ))}
    </div>
</>

export default Latests;
