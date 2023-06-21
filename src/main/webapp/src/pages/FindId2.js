import React from 'react';
import styled from 'styled-components';

const FindId2 = () => {
  return (
    <div>
      <React.Fragment>
        <FindIdWrap>
          <Text1>고객님의 컬리 계정을 찾았습니다.</Text1>
          <Text2>아이디 확인 후 로그인해 주세요.</Text2>
          <IdWrap>
            <Photo>
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
            <circle fill="#F5F5F5" cx="20" cy="20" r="20"/>
            <path d="M20 19c4.653 0 8.5 3.476 8.5 7.72 0 .43-.346.78-.773.78H12.273a.776.776 0 0 1-.773-.78c0-4.285 3.824-7.72 8.5-7.72zm0-8.5a3.4 3.4 0 1 1 0 6.8 3.4 3.4 0 0 1 0-6.8z" stroke="#CCC" fill="#CCC"/>
            </g>
            </svg>
            </Photo>
            <IdWrap2>
            <ID>awesomecreative</ID>
            <SignUpDate>가입일 2019.10.07.</SignUpDate>
            </IdWrap2>
          </IdWrap>
          <ButtonLogin>
          <Text>
            로그인
          </Text>
        </ButtonLogin>
          </FindIdWrap>
      </React.Fragment>
    </div>
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
  padding-top: 30px;
  font-weight: 600px;
  font-size: 17px;
  line-height: 23px;
  margin-top: 20px;
  color: #333;
`;
const Text2 = styled.div`
  display: block;
  padding-top:4px;
  font-weight: 400;
  font-size: 13px;
  color: rgb(153,153,153);
  line-height: 18px;
`;
const IdWrap = styled.div`
  display: flex;
  margin-top: 30px;
`;
const Photo = styled.div`
  width: 40px;
  height: 40px;
  display: block;
  margin 17px 12px 16px 0px;
`;
const ID = styled.div`
  padding-top: 17px;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
`;
const SignUpDate = styled.div`
  display: block;
  padding-top: 4px;
  font-size: 12px;
  color: rgb(153,153,153);
`;
const IdWrap2 = styled.div`
  display: block;
`;
const ButtonLogin = styled.button`
  margin-top: 70px;
  width: 100%;
  height: 54px;
  border-radius: 3px;
  border: 1px solid #5f0081;
  background-color: #5f0080;
  cursor: pointer;
  display: block;
  overflow: hidden;
  text-align: center;
`;
const Text = styled.span`
  color: #ffffff;
  font-size: 16.5px;
  margin-top: 1px;
`;
export default FindId2;