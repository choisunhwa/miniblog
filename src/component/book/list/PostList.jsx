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
    margin-bottom: 20px;
`;
    
function PostList({ posts, onClickItem}) { 
    return (
        <Wrapper>
            {posts.map((post) => { 
                return (
                    <PostListItem
                        key={'post' + post.id}
                        post={post}
                        onClickItemList={() => { onClickItem(post) }}
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

PostList.defaultProps = {
    posts: null
}