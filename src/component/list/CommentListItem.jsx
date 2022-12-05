import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 1px solid #999;
    padding: 8px;
    background-color: white;
`;
    
const CommentText = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #888;
`

function CommentListItem({ comment }) { 
    return (
        <Wrapper>
            <CommentText>{ comment.content }</CommentText>
        </Wrapper>
    )
}

export default CommentListItem;

CommentListItem.propTypes = {
    post: PropTypes.object
}

CommentListItem.defaultProps = {
    post: {title:'title'}

}