import React from 'react';
import LatestItem from './LatestsItem';

const Latests = ({ latests }) => <>
    {latests.map((latest, key) => (
        <LatestItem key={key} latest={latest} />
    ))}
</>

export default Latests;
