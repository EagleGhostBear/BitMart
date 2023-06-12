import React from "react";
import styled from "styled-components";
import { Text } from "../elements/element";

const FindPwdBox = (props) => {
  const { placeholder, margin, type, _onChange } = props;

  const styles = {
    margin: margin,
  };

  return (
    <React.Fragment>
      <ElFindPwdBox
        {...styles}
        onChange={_onChange}
        type={type}
        placeholder={placeholder}
      ></ElFindPwdBox>
    </React.Fragment>
  );
};

FindPwdBox.defaultProps = {
  margin: false,
  placeholder: "텍스트를 입력해주세요.",
  _onChange: () => {},
};

const ElFindPwdBox = styled.input`
display: block;
width: 100%;
height: 46px;
padding: 0 11px 1px 15px;
border-radius: 3px;
border: 1px solid #ddd;
font-weight: 400;
font-size: 16px;
line-height: 18px;
color: #333;
outline: none;
box-sizing: border-box;
letter-spacing: -0.05em;
justify-content: center;
background-color: #fff;
outline: none;
`;

export default FindPwdBox;
