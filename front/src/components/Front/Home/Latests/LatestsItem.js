import React from 'react';
import { formatDate } from '../../../../helpers';

const LatestItem = ({ latest }) => <>
    <div className="col-12 mb-2 mb-lg-0 col-lg-6 latest-item">
        <img className="latest-item-image" src={`${latest.image}?t=${Date.now()}`} alt={latest.title} />
        <div className="latest-item-wrapper">
            <a href={process.env.PUBLIC_URL + '/article/' + latest.slug}>
                <div className="post-meta-info">
                    <div className="d-flex align-items-center">
                        <div className="post-category-name">
                            <div>{latest.categories[0].name}</div>
                        </div>
                        <time className="post-updated-at ml-2" dateTime={formatDate(latest.created_at)}>{formatDate(latest.created_at)}</time>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <span className="mr-2">{latest.user.firstname}</span>
                        <span>
                            <img src={`${latest.user.profile}?t=${Date.now()}`} height="35" width="35" alt="User" className="rounded-circle" />
                        </span>
                    </div>
                </div>
                <div className="post-title">{latest.title}</div>
            </a>
        </div>
    </div>
</>

export default LatestItem;
