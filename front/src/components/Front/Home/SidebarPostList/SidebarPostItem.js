import React from 'react';

const SidebarPostItem = ({ sidebarPostItem }) => <>
    <div className="col-12 sidebar-post-item mb-4">
        <div className="sidebar-post-item-content">
            <h3 className="sidebar-post-item-title mt-2 mb-2">{sidebarPostItem.title}</h3>
            <p className="sidebar-post-item-description mb-2">Lorem ipsum dolor sit amet, consectetur...</p>
            <div className="sidebar-post-item-meta">
                <div className="w-100 mb-2">Par <span className="username">Elizabeth</span> le <time dateTime="10/06/2019 à 02:30:22">26 mai 2019</time></div>
                <div><i className="fas fa-hourglass-half ml-2"></i><span className="ml-2">5 min</span></div>
                <div><i className="fas fa-eye ml-2"></i><span className="ml-2">23</span></div>
                <div><i className="fas fa-heart ml-2"></i><span className="ml-2">20</span></div>
            </div>
        </div>
    </div>
</>

export default SidebarPostItem;
