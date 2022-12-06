import React from 'react';
import Styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import propTypes from 'prop-types';
import ListItemBox from '../ui/Box';
import data from '../../../data.json';

const StyledPostList = Styled.div`
    padding: 12px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 12px;
`;

function PostList() { 
    const navigate = useNavigate();

    return (
        <StyledPostList>
            {data.map((item) => {
                return (
                    <ListItemBox
                        key={`blog${item.id}`}
                        post={item}
                        onClickHandler={
                            () => navigate(`/post/${item.id}`)
                        }
                    >{item.title}</ListItemBox>)
            }) }
        </StyledPostList>
    )
}

export default PostList;

// function () { navigate(`/post/${item.id}`) }