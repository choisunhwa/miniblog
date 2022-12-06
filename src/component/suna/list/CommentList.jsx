import React from 'react';
import Styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import propTypes from 'prop-types';
import ListItemBox from '../ui/Box';

const StyledCommentList = Styled.div`
    padding: 12px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 12px;
`;

function CommentList({ comments }) { 
    const list = comments.map((comment, index) => { 
        return (<ListItemBox key={index}>{comment.content}</ListItemBox>);
    })

    return (
        <StyledCommentList>
            {list}
        </StyledCommentList>
    )
}

export default CommentList;