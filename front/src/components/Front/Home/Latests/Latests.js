import React, { useContext } from 'react';
import LatestItem from './LatestsItem';
import PostContext from '../../../../context/PostContext';

const Latests = () => {

    const context = useContext(PostContext);

    return context.latests.map((latest, key) => (
        <LatestItem key={key} latest={latest} />
    ))
}

export default Latests;
