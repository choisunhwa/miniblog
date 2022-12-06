import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CommentListItem from './CommentListItem';

const Wrapper = styled.div`
    display: felx;
    display: -webkit-flex;
    flex-direction: column;
    row-gap: 12px;
    margin-bottom: 20px;
`;
    
function CommentList({ comments }) { 
    return (
        <Wrapper>
            {comments.map((comment) => { 
                return <CommentListItem key={ comment.id } comment={comment}></CommentListItem>
            })}
        </Wrapper>
    )
}

export default CommentList;

CommentList.propTypes = {
    comments: PropTypes.array
}

// CommentList.defaultProps = {

// }