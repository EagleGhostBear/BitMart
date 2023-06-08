import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'; // Redux의 useDispatch
import { useNavigate } from 'react-router-dom'; // React Router의 useNavigate
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from '../shared/common';
import {FindIdBox} from "../elements/element";

const FindId = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [showErrorMessage, setShowErrorMessage] = React.useState(false);
  const [showErrorMessage1, setShowErrorMessage1] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidName, setIsValidName] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [errorText1, setErrorText1] = useState('');
  const [isDeleteVisible, setDeleteVisible] = useState(false);
  
  const handleNameChange = (event) => {
    const nameValue = event.target.value.trim();
    setName(nameValue);
    setDeleteVisible(nameValue !== '');
    
    if (nameValue === ''){
      setErrorText1('가입시 등록한 이름을 입력해 주세요.');
      setIsValidName(false);
    } else {
      setErrorText1('');
      setIsValidName(true);
    }
  }
  const handleEmailChange = (event) => {
    const emailValue = event.target.value.trim();
    setEmail(emailValue);
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (emailValue === '') {
      setErrorText('가입 시 등록한 이메일을 입력해 주세요.');
      setIsValidEmail(false);
    } else if (!emailRegex.test(emailValue)) {
      setErrorText('이메일 형식이 올바르지 않습니다.');
      setIsValidEmail(false);
    } else {
      setErrorText('');
      setIsValidEmail(true);
    }
  };
  
  const handleDelete = () => {
    setName('');
    setDeleteVisible(false);
  }

  const changeName = (e) => {
    setName(e);
  };

  const changeEmail = (e) => {
    setEmail(e);
  };

  const findid = () => {
    if (name === "" || email === ""){
      window.alert("이름과 이메일을 입력해주세요.");
      return;
    } else{
      dispatch(userActions.fingidDB(name, email));
    }
  };
  
  return (
    <React.Fragment>
      <FindIdWrap>
        <Text1>아이디 찾기</Text1>
        <Text2>이메일 인증</Text2>
        <Text3>이름</Text3>
        <NameWrapper>
        <FindIdBox
        type="text"
        className={isValidName? '': 'error'}
        value={name}
        placeholder="이름을 입력해 주세요"
        _onChange={handleNameChange}
        onBlur={() => {
          if(name===""){
            showErrorMessage1(true);
          } else {
            showErrorMessage1(false);
          }
        }}
        />
        {isDeleteVisible && (
        <DeleteButton onClick={handleDelete}>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
          <circle fill="#999" opacity=".5" cx="8" cy="8" r="8"/>
          <g stroke="#FFF" stroke-linecap="round" stroke-width="1.5">
            <path d="m10.897 10.786-5.77-5.769M5.122 10.785l5.775-5.775"/>
          </g>
          </g>
        </svg>
        </DeleteButton>)}
        </NameWrapper>
        {errorText1 && <div className="nameError" style={{color: "rgb(240, 63, 64)", fontSize: "13px", marginTop: "4px", marginBottom: "0px"}}>
          {errorText1}
        </div>}
        
        <Text3>이메일</Text3>
        <EmailWrapper>
        <FindIdBox
        type="text"
        className={isValidEmail? '': 'error'}
        value={email}
        _onChange={handleEmailChange}
        placeholder="이메일을 입력해 주세요"

        onBlur={()=>{
          if(email===""){
            showErrorMessage(true);
          } else {
            showErrorMessage(false);
          }
        }}
        />
        <DeleteButton1>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
        <circle fill="#999" opacity=".5" cx="8" cy="8" r="8"/>
          <g stroke="#FFF" stroke-linecap="round" stroke-width="1.5">
            <path d="m10.897 10.786-5.77-5.769M5.122 10.785l5.775-5.775"/>
          </g>
          </g>
        </svg>
        </DeleteButton1>
        </EmailWrapper>
        {errorText && <div className="emailError" style={{ color: "rgb(240, 63, 64)", fontSize: "13px", marginTop: "4px", marginBottom: "0px"}}>
          {errorText}</div>}
        <ButtonContainer>
        <ButtonFindId  style={{
          backgroundColor: isValidEmail && isValidName ? "#5f0080" : "",
          cursor: isValidEmail && isValidName ? "pointer" : "default"
          }}
        onClick={()=>{
          findid();
        }}
        >
          확인
        </ButtonFindId>
        </ButtonContainer>
      </FindIdWrap>
    </React.Fragment>
  );
};
const FindIdWrap = styled.div`
max-width: 400px;
padding: 50px 10px 6px 10px;
margin: auto;
position: relative;
background-color: white;
`;
const Text1 = styled.div`
padding-bottom: 30px;
font-weight: 600;
font-size: 28px;
text-align: center;
`;
const Text2 = styled.div`
display: block;
flex-grow: 1;
position: relative;
height: 35px;
font-weight: 600;
font-size: 16px;
color: #5f0080;
line-height: 18px;
text-align: center;
box-shadow: inset 0px -2px 0px 0px #5f0080;
`;

const Text3 = styled.div`
display: inline-block;
margin-top: 20px;
padding: 8px 0 11px;
font-size: 14px;
font-weight: 600;
line-height: 19px;
color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonFindId = styled.button`
display: inline-block;
padding: 0 10px;
text-align: center;
font-size: 16px;
font-weight: 530;
overflow: hidden;
width: 100%;
height: 52px;
border-radius: 4px;
color: #fff;
border: 0 none;
background-color: #ddd;
margin-top:20px;
justify-content: center;
place-items: center;
`;

const DeleteButton = styled.button`
position: absolute;
top: 30%;
right: 20px;
height: 16px;
width: 16px;
background-color: initial;
background-size: cover;
border-width: initial;
border-style: none;
border-color: initial;
border-image: initial;
}
`;

const DeleteButton1 = styled.button`
position: absolute;
top: 30%;
right: 20px;
height: 16px;
width: 16px;
background-color: initial;
background-size: cover;
border-width: initial;
border-style: none;
border-color: initial;
border-image: initial;
}
`;

const NameWrapper = styled.div`
position: relative;
height: 48px;
`;

const EmailWrapper = styled.div`
position: relative;
height: 48px;
`;
export default FindId;