import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { useNavigate } from "react-router-dom";
import { LoginBox } from "../elements/element";

const FindPwdWrap = styled.div`
  margin: 100px auto;
  text-align: center;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InputBox = styled(LoginBox)`
  margin-bottom: 10px;
`;

const ButtonRecovery = styled.button`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
  padding: 10px 20px;
  width: 20%;
  height: 54px;
  background-color: #5f0081;
  color: #ffffff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
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
  border-bottom: 1px solid #5f0080;
  width: 400px;
  margin: 0 auto;
`;

const FindPwd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");

  const goToLogin = () => {
    navigate("/login");
  };

  const recoverPassword = () => {
    // 비밀번호 복구 로직 추가
    // ...
  };

  return (
    <React.Fragment>
      <FindPwdWrap>
        <Title>비밀번호 찾기</Title>
        <Text2>이메일 인증</Text2>

        <h3>아이디</h3>
        <InputBox
          value={id}
          placeholder="아이디를 입력해주세요"
          _onChange={(e) => setEmail(e.target.value)}
        />

        <h3>이메일</h3>
        <InputBox
          value={email}
          placeholder="이메일을 입력해주세요"
          _onChange={(e) => setUsername(e.target.value)}
        />

        <ButtonRecovery onClick={recoverPassword}>확인</ButtonRecovery>

        <Text>
          이미 아이디가 있다면? <span onClick={goToLogin}>로그인</span>
        </Text>
      </FindPwdWrap>
    </React.Fragment>
  );
};

const Text = styled.div`
  font-size: 14px;
  margin-top: 20px;
  cursor: pointer;

  span {
    color: #5f0081;
    text-decoration: underline;
  }
`;

export default FindPwd;
