import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FindPwdCert = () => {
  const [cert, setCert] = useState("");
  const [isDeleteVisible, setDeleteVisible] = useState(false);
  const [isCertMatching, setCertMatching] = useState(null);
  const handleDelete = () => {
    setCert('');
    setDeleteVisible(false);
    setCertMatching(null);
  };
  const handleCertChange = (event) => {
    const certValue = event.target.value.trim();
    setCert(certValue);
    setDeleteVisible(certValue !== '');
    setCertMatching(null);
  };

  const [mailCert, setMailCert] = useState('');

  useEffect(() => {
    axios.post('/api/sendMail')
      .then(response => {
        axios.get('/api/mailCert')
          .then(response => {
            setMailCert(response.data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  
  useEffect(() => {
    if (cert == mailCert) {
      setCertMatching(true);
    } else if (cert !== '') {
      setCertMatching(false);
    }
  }, [cert, mailCert]);

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
        {isCertMatching === true && (
          <MatchingMessage style={{ color: 'green' }}>인증번호가 일치합니다</MatchingMessage>
        )}
        {isCertMatching === false && (
          <MatchingMessage style={{ color: 'red' }}>인증번호가 일치하지 않습니다</MatchingMessage>
        )}
        <PwdCert>인증번호 : {mailCert}</PwdCert>
        <ButtonContainer>
          <ButtonFindPwd
            style={{
              backgroundColor: "#5f0080",
              cursor: "pointer"
            }}
          > 
          <Link to="/resetpwd">
            확인
            </Link>
          </ButtonFindPwd>
        </ButtonContainer>
      </FindPwdCertWrap>
    </React.Fragment>
  );
};

const MatchingMessage = styled.div`
position: relative;
font-size: 13px;
padding-top: 3px;
`;

const PwdCert = styled.div`
position: relative;
height: 48px;
font-size: 16px;
display: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-top: 20px;
  justify-content: center;
  place-items: center;
`;

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