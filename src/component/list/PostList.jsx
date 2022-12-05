import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PostListItem from './PostListItem';

const Wrapper = styled.div`
    display: felx;
    display: -webkit-flex;
    flex-direction: column;
    row-gap: 12px;
    margin-top: 20px;
`;
    
function PostList({ posts, onClickItem}) { 
    return (
        <Wrapper>
            {posts.map((post) => { 

                return (
                    <PostListItem
                        key={'post' + post.id}
                        post={post}
                        onClick={() => { onClickItem(post) }}
                    ></PostListItem>
                )
            })}
        </Wrapper>
    )
}

export default PostList;

PostList.propTypes = {
    posts: PropTypes.array
}

// PostList.defaultProps = {
//     posts: [{
//         "id": 1,
//         "title": "리액트에서 리스트 렌더링하기",
//         "content": "안녕하세요, 소플입니다.\n이번 글에서는 리액트에서 리스트를 렌더링하는 방법에 대해서 배워보겠습니다.\n리스트를 렌더링하기 위해서는 자바스크립트 배열에서 제공하는 map함수를 사용합니다.",
//         "comments": [
//             {
//                 "id": 11,
//                 "content": "실제로 개발하다보면 map함수를 진짜 많이 쓰는 것 같아요😄"
//             },
//             {
//                 "id": 12,
//                 "content": "적용해보니 코드가 정말 간결해지네요ㅎㅎ"
//             },
//             {
//                 "id": 13,
//                 "content": "key를 꼭 넣어줘야 하는군요~"
//             },
//             {
//                 "id": 14,
//                 "content": "생산성이 확 올라가는 느낌입니다ㅋㅋ"
//             },
//             {
//                 "id": 15,
//                 "content": "오늘도 좋은 글 감사합니다!👍"
//             }
//         ]
//     },
//     {
//         "id": 2,
//         "title": "리액트의 조건부 렌더링이란?",
//         "content": "안녕하세요, 소플입니다.\n이번 글에서는 리액트의 조건부 렌더링에 대해서 배워보도록 하겠습니다.\n조건부 렌더링은 말 그대로 조건에 따라서 렌더링을 다르게 한다는 의미입니다.",
//         "comments": [
//             {
//                 "id": 21,
//                 "content": "이렇게 사용하는 방법이 있었군요!"
//             },
//             {
//                 "id": 22,
//                 "content": "좋은 글 감사합니다ㅎㅎ"
//             },
//             {
//                 "id": 23,
//                 "content": "항상 ?만 사용했었는데, 이제 &&도 사용해봐야 겠네요."
//             },
//             {
//                 "id": 24,
//                 "content": "쉬운 설명 감사드립니다😁"
//             },
//             {
//                 "id": 25,
//                 "content": "바로 코드에 적용해보겠습니다!!"
//             }
//         ]
//     },]

// }