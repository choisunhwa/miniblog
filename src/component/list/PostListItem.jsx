import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.button`
    border: 1px solid #999;
    padding: 8px;
`;
    
const TitleText = styled.p`
    font-size: 20px;
    font-weight: 700;
`

function PostListItem({ post, onClick}) { 
    return (
        <Wrapper onClick={onClick}>
            <TitleText>{ post.title }</TitleText>
        </Wrapper>
    )
}

export default PostListItem;

PostListItem.propTypes = {
    post: PropTypes.object
}

PostListItem.defaultProps = {
    post: {title:'title'}

}