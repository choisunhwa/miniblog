import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

// type: primary: blue, secondary: yellow, tertiary: grey


const StyledButton = Styled.button`
    border-width: 1px;
    padding: 8px 16px;
    border-radius: 8px;
    border: 0 none;

    ${(props) => {
        if (props.variant === 'primary') {
            return `background-color: blue;color: white;`
        }
        else if (props.variant === 'secondary') {
            return `background-color: yellow;`
        } else if (props.variant === 'tertiary') {
            return `background-color: #888;`
        }
    }}

    ${(props) => {
        if (props.size === 'small') {
            return `width: auto;`
        }
         else if (props.size === 'medium') {
            return `width: 300px;`
        } else if (props.size === 'large') { 
            return `width: 600px;`
        } else if (props.size === 'full') { 
            return `width: 100%;`
        }
    }}
`;

function Button({ variant, size, onClickHandler, children }) { 
    return (
        <StyledButton variant={variant} size={size} onClick={onClickHandler}>{ children }</StyledButton>
    );
}

export default Button;

Button.propTypes = {
    variant : PropTypes.string,
    children : PropTypes.string,
    size : PropTypes.string
}
Button.defaultProps = {
    variant: 'primary',
    children: '버튼',
    size: 'auto'
}

