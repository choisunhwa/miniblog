import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CommentListItem from './CommentListItem';

const Wrapper = styled.div`
    display: felx;
    display: -webkit-flex;
    flex-direction: column;
    row-gap: 12px;
    margin-bottom: 20px;
`;
    
function CommentList({ comments }) { 
    return (
        <Wrapper>
            {comments.map((comment) => { 
            console.log(comment)
                return <CommentListItem key={ comment.id } comment={comment}></CommentListItem>
            })}
        </Wrapper>
    )
}

export default CommentList;

CommentList.propTypes = {
    comments: PropTypes.array
}

CommentList.defaultProps = {
    comments: [
            {
                "id": 11,
                "content": "실제로 개발하다보면 map함수를 진짜 많이 쓰는 것 같아요😄"
            },
            {
                "id": 12,
                "content": "적용해보니 코드가 정말 간결해지네요ㅎㅎ"
            },
            {
                "id": 13,
                "content": "key를 꼭 넣어줘야 하는군요~"
            },
            {
                "id": 14,
                "content": "생산성이 확 올라가는 느낌입니다ㅋㅋ"
            },
            {
                "id": 15,
                "content": "오늘도 좋은 글 감사합니다!👍"
            }
        ]

}