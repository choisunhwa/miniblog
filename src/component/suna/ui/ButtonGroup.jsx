import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const StyledButtonGroup = Styled.div`
    display: flex;

    ${(props) => {
        if (props.align === 'left') {
            return `justify-content: flex-start`
        }
        else if (props.align === 'right') {
            return `justify-content: flex-end`
        }
        else if (props.align === 'center') {
            return `justify-content: flex-end`
        }
    }};
    ${(props) => props.mt && `margin-top: ${props.mt}`};
`;

function ButtonGroup({ align, variant, size, mt, onClickHandler, children }) { 
    return (
        <StyledButtonGroup align={ align } mt={mt}>
            <Button variant={variant} size={size} onClickHandler={onClickHandler}>{ children }</Button>
        </StyledButtonGroup>
    );
}

export default ButtonGroup;

ButtonGroup.propTypes = {
    align : PropTypes.string
}
ButtonGroup.defaultProps = {
    align : 'center'
}

