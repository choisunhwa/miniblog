import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

// 옵션: 높이값
const StyledTextarea = Styled.textarea`
    width: 100%;
    border: 2px solid gray;
    border-radius: 8px;
    box-sizing: border-box;

    ${(props) => props.height && `height: ${props.height}`}
`;

function TextInput({ height }) { 
    return (
        <StyledTextarea height={height}></StyledTextarea>
    )
}

export default TextInput;

TextInput.propTypes = {
    height: PropTypes.string
}

TextInput.defaultProps = {
    height: 'auto'
}