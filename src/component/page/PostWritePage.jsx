import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

const Wrapper = styled.div`
    padding: 16px;
    background: lightgrey;
`;

const Container = styled.div`
    max-width: 70%;
`;

function PostWritePage(props) { 
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <Wrapper>
            <Container>
                <TextInput
                    height="50px"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value)
                    }}
                ></TextInput>
                
                <TextInput
                    height="480px"
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value)
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

export default PostWritePage;