import React from 'react';
import Styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import {ArticleSubTitle, ArticleTitle} from '../ui/ArticleTitle';
import CommentList from '../list/CommentList';
import ButtonGroup from '../ui/ButtonGroup';
import ListItemBox from '../ui/Box';

import data from '../../../data.json'

const StyledWrapper = Styled.div`
    padding: 20px;
`;

const PostContainer = Styled.div`
    padding: 20px;
    border:2px solid lightblue;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const PostArticle = Styled.div`
    h2{
        margin: 0;
    }
    p{
        margin: 20px 0 0 0;
    }
`;

const CommentContainer = Styled.div`
    padding: 20px;
    border:2px solid lightblue;
    margin-top: 20px;
    margin-bottom: 20px;
`;



function MainPage() { 
    const navigate = useNavigate();
    
    const onClickHandlerGoMain = () => { navigate('/'); };
    const onClickHandlerGoWrite = () => { navigate('/post-write'); };
    
    let postId = useParams();
    let postIdValue = Object.values(postId)[0];
    
    const post = data.find((item) => {
        return Number(postIdValue) === item.id;
    });

    return (
        <>
            <ArticleTitle>미니 블로그 혼자 만들기</ArticleTitle>

            <StyledWrapper>
                
                <ButtonGroup align='left' variant="teritiary" onClickHandler={onClickHandlerGoMain}>이전으로 가기</ButtonGroup>

                <PostContainer>
                    <ListItemBox>
                        <PostArticle>
                            <h2>{ post.title }</h2>
                            <p>{ post.content }</p>
                        </PostArticle>
                    </ListItemBox>
                </PostContainer>
                
                <CommentContainer>
                    <ArticleSubTitle>댓글</ArticleSubTitle>
                    <CommentList comments={post.comments}></CommentList>
                </CommentContainer>

                <ButtonGroup align='left' variant="teritiary" onClickHandler={onClickHandlerGoWrite}>글작성하기</ButtonGroup>
            </StyledWrapper>
        </>


    );
}

export default MainPage;