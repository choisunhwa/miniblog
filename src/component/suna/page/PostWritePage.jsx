import React from 'react';
import Styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import {ArticleTitle} from '../ui/ArticleTitle';
import TextInput from '../ui/TextInput';
import ButtonGroup from '../ui/ButtonGroup';

const StyledWrapper = Styled.div`
    padding: 20px;
`;

const StyledContainer = Styled.div`
    padding: 20px;
    border:2px solid lightblue;
    margin-top: 20px;
`;


function PostWritePage() { 
    const navigate = useNavigate();
    
    const onClickHandler = () => { navigate('/');};
    
    return (
        <StyledWrapper>
            <ArticleTitle>미니 블로그 혼자 만들기</ArticleTitle>

            <StyledContainer>
                <TextInput isFocus={true}></TextInput>
                <TextInput isFocus={false} height={'500px'}></TextInput>
            </StyledContainer>

            <ButtonGroup mt={ '20px'} variant='secondary' size='full' onClickHandler={onClickHandler}>글작성하기</ButtonGroup>
        </StyledWrapper>
    );
}

export default PostWritePage;