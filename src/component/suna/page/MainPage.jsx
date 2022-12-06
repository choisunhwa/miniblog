import React from 'react';
import Styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import {ArticleTitle} from '../ui/ArticleTitle';
import ButtonGroup from '../ui/ButtonGroup';
import PostList from '../list/PostList';

const StyledWrapper = Styled.div`
    padding: 20px;
`;

const StyledContainer = Styled.div`
    padding: 20px;
    border:2px solid lightblue;
    margin-top: 20px;
`;


function MainPage() { 
    const navigate = useNavigate();
    
    const onClickHandler = () => { navigate('/post-write');};
    
    return (
        <>
            <ArticleTitle>미니 블로그 혼자 만들기</ArticleTitle>

            <StyledWrapper>
                <ButtonGroup align='right' variant="teritiary" onClickHandler={onClickHandler}>글작성</ButtonGroup>
                <StyledContainer>
                    <PostList></PostList>
                </StyledContainer>
            </StyledWrapper>
        </>

    );
}

export default MainPage;