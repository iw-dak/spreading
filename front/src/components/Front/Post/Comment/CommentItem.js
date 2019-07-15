import React from 'react';
import { formatDate } from '../../../../helpers';

const CommentItem = ({ comment, index }) => <>
    <div className="comment-item">
        <div className={`c-logs__item c-logs__item--${index === 0 ? 'primary' : 'secondary'}`}>
            <img className="c-logs__avatar" src={`${comment.user.profile}${Date.now()}`} alt="{comment.user.firstname}" />
            <div className="c-logs__body">
                <div className="c-logs__header">
                    <h3 className="c-logs__title">{`${comment.user.firstname} ${comment.user.lastname}`}&nbsp;</h3>
                    <span className="c-logs__time">{formatDate(comment.created_at)}</span>
                </div>

                <div className="c-logs__content">
                    <p>{comment.content}</p>
                </div>
            </div>
        </div>
    </div>
</>

export default CommentItem;
