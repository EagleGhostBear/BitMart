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
            {/* <div class="container">
                <div class="round">
                    <input type="checkbox" checked id="checkbox" 
                    isChecked={isChecked} />
                    <label for="checkbox"
                    onClick={onClickCheck} isChecked={isChecked}></label>
                </div>
            </div> */}
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
    background: #fff;
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
            ? {
                  backgroundColor: "#5f0080",
                  borderColor: "#5f0080",
                  "&:after": {
                      content: {
                          backgroundColor: "#f00",
                          border: "2px solid #fff",
                          borderTop: "none",
                          borderRight: "none",
                          content: "",
                          height: 6,
                          left: "7px",
                          opacity: 0,
                          position: "absolute",
                          top: "8px",
                          transform: "rotate(-45deg)",
                          width: 12
                      }
                  }
              }
            : {
                  backgroundColor: "#fff",
                  "&:after": {
                      content: {
                          opacity: 1
                      }
                  }
              }}
`;