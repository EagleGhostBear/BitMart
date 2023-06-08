import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { useNavigate } from "react-router-dom";
import { LoginBox } from "../elements/element";
import FindPwdBox from "../elements/FindPwdBox";


const FindPwd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [errorText, setErrorText] = useState('');
  const [errorText1, setErrorText1] = useState('');
  const [isValidId, setIsValidId] = useState('');
  const [isValidEmail, setIsValidEmail] = useState('');
  const [showErrorMessage, setShowErrorMessage] = React.useState(false);
  const [showErrorMessage1, setShowErrorMessage1] = React.useState(false);
  
  const handleIdChange = (event) => {
    const idValue = event.target.value.trim();
    setId(idValue);

    if (idValue===''){
    setErrorText1('가입시 등록한 아이디를 입력해주세요.');
    setIsValidId(false);
  } else {
    setErrorText1('');
    setIsValidId(true);
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

  const goToFindId = () => {
    navigate("/findid");
  };

  const findpwd = () => {
    if (id === "" || email === ""){
      window.alert("아이디와 이메일을 입력해 주세요.");
      return;
    } else{
      dispatch(userActions.fingidDB(id, email));
    }
  };

  return (
    <React.Fragment>
      <FindPwdWrap>
        <Title>비밀번호 찾기</Title>
        <Text2>이메일 인증</Text2>

        <Text3>아이디</Text3>
        <FindPwdBox
          type="text"
          className={isValidId? '':'error'}
          value={id}
          placeholder="아이디를 입력해주세요"
          _onChange={handleIdChange}
          onBlur={()=>{
            if(id===""){
              showErrorMessage1(true);
            } else{
              showErrorMessage1(false);
            }
          }}
        />
        {errorText1 && <div className="emailError" style={{ color: "rgb(240, 63, 64)", fontSize: "13px", marginTop: "4px", marginBottom: "0px"}}>
          {errorText1}</div>}

        <Text3>이메일</Text3>
        <FindPwdBox
          type="text"
          className={isValidEmail? '' : 'error'}
          value={email}
          placeholder="이메일을 입력해주세요"
          _onChange={handleEmailChange}
        />
        {errorText && <div className="emailError" style={{ color: "rgb(240, 63, 64)", fontSize: "13px", marginTop: "4px", marginBottom: "0px"}}>
          {errorText}</div>}

        <ButtonFindPwd style={{
          backgroundColor: isValidEmail && isValidId ? "#5f0080" : "",
          cursor: isValidEmail && isValidId ? "pointer" : "default"
          }}
        onClick={()=>{
          findpwd();
        }}>확인</ButtonFindPwd>

        <Text1>
          <span onClick={goToFindId}>가입하신 이메일 주소를 잊으셨나요?</span>
        </Text1>
      </FindPwdWrap>
    </React.Fragment>
  );
};

const Text1 = styled.div`
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
  cursor: pointer;

  span {
    color: #5f0081;
    text-decoration: underline;
  }
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

const FindPwdWrap = styled.div`
  max-width: 400px;
  padding: 50px 10px 6px 10px;
  margin: auto;
  positionL relative;
  background-color: white;
`;

const Title = styled.div`
  padding-bottom: 30px;
  font-weight: 600;
  font-size: 28px;
  text-align: center;
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

const ButtonFindPwd = styled.button`
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

export default FindPwd;
