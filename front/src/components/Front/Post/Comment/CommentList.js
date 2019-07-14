import React from 'react';
import CommentItem from './CommentItem';

const CommentList = ({ comments }) => comments.map((comment, index) => <CommentItem key={index} comment={comment} />)

export default CommentList;
