// import React, {useState, useEffect, useReducer} from 'react';
import React, {useState, useReducer} from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const UIInputWrapper = Styled.div`
    position: relative;
`;

const SubText = Styled.div`
    padding-left: 30px;
    font-size: 12px;
    color: #888;
`;

const InputWrapper = Styled.div`
    position: relative;
`;

const StyledInput = Styled.input`
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    clip: rect(0 0 0 0);
    line-height:0;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    &:checked + label{
    }
    &:checked + label::after{
        background-color: blue;
    }
`;

const StyledLabel = Styled.label`
    position:relative;
    padding-left: 30px;
    &::after{
        content:'';
        position:absolute;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
        display:block;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: gray;
    }
`;


function CheckBox({id, subTextValue, children}) { 
    let [subText, setSubText] = useState('');
    
    function init(initialValue) { 
        setSubText(subTextValue[1]);
        return { ...initialValue}
    }

    const [state, dispatch] = useReducer(
        //reducer 
        (state, action) => { 
            if (action.isChecked) {
                setSubText(subTextValue[0]);
            } else if(!action.isChecked){ 
                setSubText(subTextValue[1]);
            }
            return {...action}
        }
        // ({ 
        //     ...state,
        //     ...action,
        // })
        , {
            isChecked: false,
            isSubText: false,
            isSubTextValue: Boolean(subTextValue)
        }
        , init
    );
    
    // 체크박스 초기 설정
    // useEffect(() => {
    //     let TF = Boolean(subTextValue);

    //     if (TF) {
    //         setSubText(subTextValue[1]);
    //     }
    // }, [subTextValue]);

    return (
        <UIInputWrapper>
            <InputWrapper>
                <StyledInput
                    type='checkbox'
                    id={id}
                    checked={state.isChecked}
                    onChange={(e)=>dispatch({isChecked: e.target.checked})}
                ></StyledInput>
                <StyledLabel htmlFor={id}>{children}</StyledLabel>
            </InputWrapper> 
            <SubText>
                {subText}
            </SubText>
        </UIInputWrapper>
    );
}

export default CheckBox;

CheckBox.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.string,
    subTextValue: PropTypes.array,
    subText: PropTypes.string,
    handleChange: PropTypes.func,
}
CheckBox.defaultProps = {
    children: '체크박스',
    id: 'checkbox'
}