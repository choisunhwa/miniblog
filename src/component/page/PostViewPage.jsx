import React, {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import CommentList from '../list/CommentList';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import data from '../../data.json'

const Wrapper = styled.div`
    padding: 16px;
    background: lightgrey;
`;

const Container = styled.div`
    max-width: 70%;
`;

const PostContainer = styled.div`
    border: 1px solid gray;
    padding: 16px 12px;
    margin-top: 20px;
`;
const TitleText = styled.div`
    font-weight: 700;
    font-size: 20px;
`;
const ContentText = styled.div`
    font-weight: 500;
    font-size: 16px;
    margin-top: 20px;
`;

function PostViewPage() { 
    const navigate = useNavigate();
    const {postId} = useParams();

    const post = data.find((item) => {
        return item.id.toString() === postId;
    })

    const [comment, setComment] = useState('');

    return (
        <Wrapper>
            <Container>

                <Button
                    onClick={()=>{ 
                        navigate('/')
                    }}
                >뒤로가기</Button>

                <PostContainer>
                    <TitleText>{ post.title }</TitleText>
                    <ContentText>{ post.content }</ContentText>
                </PostContainer>
                
                <h3> 댓글 </h3>
                <CommentList comments={post.comments}></CommentList>
                
                <TextInput
                    height="40px"
                    value={comment}
                    onChange={(event) => {
                        setComment(event.target.value)
                    }}
                ></TextInput> 

                <Button
                    onClick={()=>{ 
                        navigate('/')
                    }}
                >글 작성하기</Button>
            </Container>
        </Wrapper>
    )
}

export default PostViewPage;