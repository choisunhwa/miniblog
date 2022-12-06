import React from 'react';
import Styled from 'styled-components';
// import propTypes from 'prop-types';

const StyledBox = Styled.div`
    border: 1px solid gray;
    border-radius: 12px;
    padding: 12px;
    font-size: 20px;
`;

function ListItemBox({ children, item, keyValue, onClickHandler }) { 
    
    return (
        <StyledBox item={item} onClick={onClickHandler}>{ children }</StyledBox>
    )
}

export default ListItemBox;

