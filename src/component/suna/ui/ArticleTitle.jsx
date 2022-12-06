import React from 'react';
import Styled from 'styled-components';
// import propTypes from 'prop-types';

const StyledArticleTitle = Styled.div`
    padding: 20px;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
`;
const StyledArticleSubTitle = Styled.div`
    padding: 12px;
    font-weight: bold;
    font-size: 12px;
    &:first-child{
        padding-top: 0
    }
`;

export function ArticleTitle({ children }) { 
    
    return (
        <StyledArticleTitle>
            <h1>{ children }</h1>
        </StyledArticleTitle>
    )
}

export function ArticleSubTitle({ children }) { 
    return (
        <StyledArticleSubTitle>
            <h2>{ children }</h2>
        </StyledArticleSubTitle>
    )
}

