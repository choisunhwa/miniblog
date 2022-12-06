import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border: 1px solid gray;
    border-radius: 8px;
    cursor: pointer;
    ${(props) => props.type === 'primary' && `background-color: blue;color:white;`}
    ${(props) => props.type === 'secondary' && `background-color: grayinitial;color:intial;`}
    ${(props) => { 
        switch (props.size) { 
            case 'small':
                return 'width: 300px;'
            case 'medium':
                return 'width: 500px;'
            default :
                return 'width: auto;'
        }
    }}
`;


function Button({ children, onClick, type, size }) { 
    // console.log(type)
    return (
        <StyledButton type={type} size={size} onClick={onClick}>{ children }</StyledButton>
    )
}

export default Button;

Button.propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string,
}
Button.defaultProps = {
    type: 'primary',
    children: '버튼',
}