import { useState } from "react";
import styled , { css } from "styled-components";
// import './DeleteCheckbox.css';

export default function DeleteCheckbox() {
    const [isChecked, setIsChecked] = useState(false);

    const onClickCheck = () => {
        setIsChecked(!isChecked);
        console.log(!isChecked);
    };

    return (
        <>
            <CustomCheckboxWrapper>
                <CustomCheckbox type="checkbox" isChecked={isChecked} />
                <CustomLabel onClick={onClickCheck} isChecked={isChecked} />
            </CustomCheckboxWrapper>
        </>
    );
}

const CustomCheckboxWrapper = styled.div`
    position: relative;
`;

const CustomCheckbox = styled.input`
    visibility: hidden;
    ${({ isChecked }) =>
        isChecked
            ? css`
                  background-color: #66bb6a;
                  border-color: #66bb6a;
                  &:after: {
                      opacity: 1;
                  }
              `
            : null}
`;

const CustomLabel = styled.label`
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    width: 28px;
    height: 28px;
    position: absolute;
    left: 0;
    top: 0;
    ${({ isChecked }) =>
        isChecked
            ? css`
                  background-color: #5f0080;
                  border-color: #5f0080;
                  &:after {
                      border: 2px solid #fff;
                      border-top: none;
                      border-right: none;
                      content: "";
                      height: 6px;
                      left: 7px;
                      position: absolute;
                      top: 8px;
                      transform: rotate(-45deg);
                      width: 12px;
                  }
              `
            : css`
                  background-color: #fff !important;
                  &:after {
                      opacity: 1;
                  }
              `}
`;