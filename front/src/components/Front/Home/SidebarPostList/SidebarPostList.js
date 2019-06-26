import React from 'react';
import SidebarPostItem from './SidebarPostItem';
import './SidebarPostList.scss';

const SidebarPostList = ({ sidebarPostList }) => <>
    {sidebarPostList.map((sidebarPostItem, key) => (
        <SidebarPostItem key={key} sidebarPostItem={sidebarPostItem} />
    ))}
</>

export default SidebarPostList;
