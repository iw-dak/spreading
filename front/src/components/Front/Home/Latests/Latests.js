import React from 'react';
import LatestItem from './LatestsItem';
import './Latests.scss';

const Latests = ({ latests }) => <>
    <div className="container">
        <div className="row">
            {latests.map((latest, key) => (
                <LatestItem key={key} latest={latest} />
            ))}
        </div>
    </div>
</>

export default Latests;
