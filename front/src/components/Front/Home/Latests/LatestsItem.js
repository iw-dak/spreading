import React from 'react';

const LatestItem = ({ latest }) => <>
    <div className="col-12 mb-2 mb-lg-0 col-lg-4 latest-item">
        <img className="latest-item-image" src="https://source.unsplash.com/random" alt={latest.title} />
        <div className="latest-item-wrapper">
            <a href={latest.link}>
                <div className="post-meta-info">
                    <div className="d-flex align-items-center">
                        <span className="post-category-name">
                            <div>{latest.category}</div>
                        </span>
                        <time className="post-updated-at ml-2" dateTime="10/06/2019">10 mai 2019</time>
                    </div>
                    <div>
                        <span className="mr-2">Fatima</span>
                        <img src="https://source.unsplash.com/random" height="35" width="35" alt="User" className="rounded-circle" />
                    </div>
                </div>
                <div className="post-title">{latest.title}</div>
            </a>
        </div>
    </div>
</>

export default LatestItem;
