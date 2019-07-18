import React from 'react';
import CommentItem from './CommentItem';
import './CommentList.scss';

const CommentList = ({ comments }) => <>
    <div className="o-layout">
        <div className="o-layout__item">
            <div className="c-logs">
                <div className="c-logs__list">
                    {comments.map((comment, index) => <CommentItem key={index} comment={comment} index={index} />)}
                </div>
            </div>
        </div>
    </div>
</>

export default CommentList;
