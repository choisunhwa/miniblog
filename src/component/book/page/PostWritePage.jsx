import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

const Wrapper = styled.div`
    padding: 0 20px;
`;

const Container = styled.div`
    padding: 20px;
    background: lightgrey;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
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

                <ButtonGroup>
                    <Button onClick={()=>{ navigate('/') }} >글 작성하기</Button>
                </ButtonGroup>
            </Container>
        </Wrapper>
    )
}

export default PostWritePage;