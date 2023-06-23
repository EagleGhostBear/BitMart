import React, { useState } from 'react';
import styled from "styled-components";

const ResetPwd = () => {
  const [pwd, setPwd] = useState("");
  const [pwd1, setPwd1] = useState("");
  const [isDeleteVisible, setDeleteVisible] = useState(false);
  const [isDeleteVisible1, setDeleteVisible1] = useState(false);
  const [inputPwdValue, setInputPwdValue] = useState('');
  const [inputPwd1Value, setInputPwd1Value] = useState('');
  
  const handlePwdChange = (event) => {
    const pwdValue = event.target.value.trim();
    setPwd(pwdValue);
    setDeleteVisible(pwdValue !== '');
    setInputPwdValue(pwdValue);
  };
  
  const handlePwd1Change = (event) => {
    const pwd1Value = event.target.value.trim();
    setPwd1(pwd1Value);
    setDeleteVisible1(pwd1Value !== '');
    setInputPwd1Value(pwd1Value);
  };

  const handleDeletePwd = () => {
    setPwd('');
    setInputPwdValue('');
    setDeleteVisible(false);
  };

  const handleDeletePwd1 = () => {
    setPwd1('');
    setInputPwd1Value('');
    setDeleteVisible1(false);
  };
  

  const handleFocus = () => {
    const validateElement = document.getElementById("validate1");
    validateElement.style.display = "block";
  }

  const handleFocus1 = () => {
    const validateElement1 = document.getElementById("validate");
    validateElement1.style.display = "block";
  }
  const isLengthValid = inputPwdValue.length >= 10;
  const isCombinationValid = /^(?=.*[A-Za-z])(?=.*\d)|(?=.*[A-Za-z])(?=.*[@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~`])|(?=.*\d)(?=.*[@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~`])/.test(inputPwdValue);
  const isConsecutiveValid = !/(\d)\1{2,}/g.test(inputPwdValue);
  const isPasswordMatch = inputPwdValue.length > 0 && inputPwd1Value.length > 0 && inputPwdValue === inputPwd1Value;

  return (
    <React.Fragment>
      <ResetPwdWrap>
        <Title>비밀번호 재설정</Title>
        <Text1>새 비밀번호 등록</Text1>
        <PwdWrapper>
        <Input
        type="password"
        className="ResetPwd"
        value={inputPwdValue}
        placeholder="새 비밀번호를 입력해 주세요"
        onChange={handlePwdChange}
        onFocus={handleFocus1}
        />
        {isDeleteVisible && (
            <DeleteButton onClick={handleDeletePwd}>
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle fill="#999" opacity=".5" cx="8" cy="8" r="8" />
                  <g stroke="#FFF" strokeLinecap="round" strokeWidth="1.5">
                    <path d="m10.897 10.786-5.77-5.769M5.122 10.785l5.775-5.775" />
                  </g>
                </g>
              </svg>
            </DeleteButton>
          )}
          </PwdWrapper>

          <Validate id="validate" style={{display:'none'}}>
          {isLengthValid && <div style={{color: 'rgb(14, 133, 26)'}}> ✓ 10자 이상 입력</div>}
          {!isLengthValid && <div style={{color: 'rgb(240, 63, 64)'}}> ✕ 10자 이상 입력</div>}
          <br />
          {isCombinationValid && <div style={{color: 'rgb(14, 133, 26)'}}> ✓ 영문/숫자/특수문자(공백제외)만 허용하며, 2개 이상 조합</div>}
          {!isCombinationValid && <div style={{color: 'rgb(240, 63, 64)'}}> ✕ 영문/숫자/특수문자(공백제외)만 허용하며, 2개 이상 조합</div>}
          <br />
          {isConsecutiveValid && <div style={{color: 'rgb(14, 133, 26)'}}> ✓ 동일한 숫자 3개 이상 연속 사용 불가</div>}
          {!isConsecutiveValid && <div style={{color: 'rgb(240, 63, 64)'}}> ✕ 동일한 숫자 3개 이상 연속 사용 불가</div>}
          </Validate>
        
        <Text2>새 비밀번호 확인</Text2>
        <Pwd1Wrapper>
        <Input
        type="password"
        className="CheckPwd"
        value={inputPwd1Value}
        placeholder="새 비밀번호를 한 번 더 입력해 주세요"
        onChange={handlePwd1Change}
        onFocus={handleFocus}
        />
        {isDeleteVisible1 && (
            <DeleteButton1 onClick={handleDeletePwd1}>
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle fill="#999" opacity=".5" cx="8" cy="8" r="8" />
                  <g stroke="#FFF" strokeLinecap="round" strokeWidth="1.5">
                    <path d="m10.897 10.786-5.77-5.769M5.122 10.785l5.775-5.775" />
                  </g>
                </g>
              </svg>
            </DeleteButton1>
          )}
        </Pwd1Wrapper>
        
        <Validate1 id="validate1" style={{display:'none'}}>
        {isPasswordMatch && <div style={{color: 'rgb(14, 133, 26)'}}> ✓ 동일한 비밀번호를 입력해 주세요.</div>}
          {!isPasswordMatch && <div style={{color: 'rgb(240, 63, 64)'}}> ✕ 동일한 비밀번호를 입력해 주세요.</div>}
        </Validate1>

        <ButtonContainer>
          <ButtonResetPwd
            style={{
              backgroundColor: isLengthValid && isCombinationValid && isConsecutiveValid && isPasswordMatch ? "#5f0080" : "",
              cursor: isLengthValid && isCombinationValid && isConsecutiveValid && isPasswordMatch ? "pointer" : "default"
            }}
          >
            확인
          </ButtonResetPwd>
        </ButtonContainer>
      </ResetPwdWrap>
      
    </React.Fragment>
  );
};

const ResetPwdWrap = styled.div`
max-width: 400px;
padding: 50px 10px 6px 10px;
margin: auto;
position: relative;
background-color: white;
`;

const Title = styled.div`
  padding-bottom: 30px;
  font-weight: 600;
  font-size: 28px;
  text-align: center;
`;

const Text1 = styled.div`
  display: inline-block;
  margin-top: 20px;
  padding: 8px 0 11px;
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  color: #333;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0 12px;
  font-size: 16px;
  font-weight: 530;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

const PwdWrapper = styled.div`
position: relative;
height: 48px;
`;

const Pwd1Wrapper = styled.div`
position: relative;
height: 48px;
`;

const Text2 = styled.div`
  display: inline-block;
  margin-top: 20px;
  padding: 8px 0 11px;
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  color: #333;
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
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonResetPwd = styled.button`
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
  margin-top: 20px;
  justify-content: center;
  place-items: center;
`;
const StyleGreen = {
  color: 'rgb(14, 133, 26)',
  fontSize: '12px',
  lineHeight: '10px',
  padding: '5px'
}
const StyleRed = {
  color: 'rgb(240, 63, 64)',
  fontSize: '12px',
  lineHeight: '10px',
  padding: '5px'
}

const Validate = styled.div`
  padding: 10px;
  font-size: 12px;
  line-height: 10px;
`;

const Validate1 = styled.div`
  padding: 10px;
  font-size: 12px;
  line-height: 10px;
`;

export default ResetPwd;