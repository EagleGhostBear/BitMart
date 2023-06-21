import React, { useState } from 'react';
import styled from 'styled-components';

const FindPwdCert = () => {
  const [cert, setCert] = useState("");
  const [isDeleteVisible, setDeleteVisible] = useState(false);
  const handleDelete = () => {
    setCert('');
    setDeleteVisible(false);
  };
  const handleCertChange = (event) => {
    const certValue = event.target.value.trim();
    setCert(certValue);
    setDeleteVisible(certValue !== '');
  };
  
  return (
    <React.Fragment>
      <FindPwdCertWrap>
        <Title>비밀번호 찾기</Title>
        <Text1>인증번호</Text1>
        <PwdCertWrapper>
          <Input
            type="text"
            value={cert}
            placeholder="인증번호를 입력하세요"
            onChange={handleCertChange}
          />
          {isDeleteVisible && (
            <DeleteButton onClick={handleDelete}>
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
        </PwdCertWrapper>
      </FindPwdCertWrap>
    </React.Fragment>
  );
};

const FindPwdCertWrap = styled.div`
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

const PwdCertWrapper = styled.div`
  position: relative;
  height: 48px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0 12px;
  font-size: 16px;
  font-weight: 530;
  border: 1px solid #5f0080;
  border-radius: 4px;
  box-sizing: border-box;
`;


export default FindPwdCert;