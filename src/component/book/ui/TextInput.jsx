import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTextInput = styled.textarea`
    width: calc(100% - 32px);
    ${(props) => props.height && `height: ${ props.height};`}
    padding: 16px;
    background: lightblue;
`;

function TextInput({ height, value, onChange }) { 

    return (
        <StyledTextInput height={height} value={value} onChange={onChange}></StyledTextInput>
    )
}

export default TextInput;

TextInput.propTypes = {
    height: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
}
TextInput.defaultProps = {
    height: null,
    value: null,
    onChange: PropTypes.object,
}