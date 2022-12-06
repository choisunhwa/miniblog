import React from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PostList from '../list/PostList';
import Button from '../ui/Button'
import data from '../../../data.json'

const PageWrapper = styled.div`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
`;

const PageContainer = styled.div`
    min-height: 500px;
    padding: 0 20px;
    background: #f4433633;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 20px 0;
`;

function MainPage() { 
    const navigate = useNavigate();

    return (
        <PageWrapper>
            <PageContainer>
                <ButtonGroup>
                    <Button type="secondary" onClick={()=>{navigate('/post-write')}}>글 작성하기</Button>
                </ButtonGroup>

                <PostList
                    posts={data}
                    onClickItem={(item) => { 
                        navigate(`/post/${item.id}`);
                    }}
                ></PostList>
            </PageContainer>
        </PageWrapper>
    )
}

export default MainPage;