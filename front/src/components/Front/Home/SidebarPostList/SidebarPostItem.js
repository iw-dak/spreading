import React from 'react';
import { formatDate } from '../../../../helpers';

const SidebarPostItem = ({ sidebarPostItem }) => <>
    <div className="col-12 sidebar-post-item mb-4" data-aos="fade-up" data-aos-duration="3000">
        <div className="sidebar-post-item-content">
            <a href={process.env.REACT_APP_URL + '/article/' + sidebarPostItem.slug}>
                <h3 className="sidebar-post-item-title mt-2 mb-2 post-title">{sidebarPostItem.title}</h3>
            </a>
            <p className="sidebar-post-item-description mb-2">{sidebarPostItem.content.substring(0, 70)}&hellip;</p>
            <div className="sidebar-post-item-meta">
                <div className="w-100 mb-2">Par <a href={process.env.REACT_APP_URL + '/collaborators/' + sidebarPostItem.user.username} className="username">{sidebarPostItem.user.firstname}</a> le <time dateTime="10/06/2019 à 02:30:22">{formatDate(sidebarPostItem.created_at)}</time></div>
                <div><i className="fas fa-hourglass-half ml-2"></i><span className="ml-2">{sidebarPostItem.readtime} min</span></div>
                <div><i className="fas fa-eye ml-2"></i><span className="ml-2">{sidebarPostItem.views}</span></div>
                <div><i className="fas fa-heart ml-2"></i><span className="ml-2">{sidebarPostItem.votes}</span></div>
            </div>
        </div>
    </div>
</>

export default SidebarPostItem;
