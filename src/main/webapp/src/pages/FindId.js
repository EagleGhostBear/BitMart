import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'; // Redux의 useDispatch
import { useNavigate } from 'react-router-dom'; // React Router의 useNavigate
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from '../shared/common';
import { LoginBox as FindIdBox } from "../elements/element";

const FindId = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [showErrorMessage, setShowErrorMessage] = React.useState(false);

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const checkEmail = () => {
    if (!emailCheck(email)) {
      alert("올바른 이메일 형식을 입력해 주세요");
      return;
    }
    dispatch(userActions.emailCheckF(email));
  };

  const findid = () => {
    if (name === "" || email === "") {
      window.alert("이름과 이메일을 입력해주세요.");
      return;
    } else {
      dispatch(userActions.fingidDB(name, email));
    }
  };

  return (
    <React.Fragment>
      <FindIdWrap>
        <Text1>아이디 찾기</Text1>
        <Text2>이메일 인증</Text2>
        <Text3>이름</Text3>
        <FindIdBox
          value={name}
          placeholder="이름을 입력해 주세요"
          _onChange={(e) => {
            changeName(e.target.value);
          }}
          onBlur={() => {
            setShowErrorMessage(name.trim() === ""); // name이 비어 있을 때에만 showErrorMessgae 값을 변경
          }}
        />
        {showErrorMessage && (
          <p style={{ color: "rgb(240, 63, 64)", fontSize: "13px", marginTop: "4px", marginBottom: "0px" }}>
            가입 시 등록한 이름을 입력해 주세요.
          </p>
        )}
        <Text3>이메일</Text3>
        <FindIdBox
          value={email}
          placeholder="이메일을 입력해 주세요"
          _onChange={(e) => {
            changeEmail(e.target.value);
          }}
        />
        {email === "" && (
          <p style={{ color: "rgb(240, 63, 64)", fontSize: "13px", marginTop: "4px", marginBottom: "0px" }}>
            가입 시 등록한 이메일을 입력해 주세요.
          </p>
        )}
        <ButtonContainer>
          <ButtonFindId
            onClick={() => {
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
  margin-top: 20px;
  justify-content: center;
  place-items: center;
`;

export default FindId;
