import React, { useState } from "react";
import styled from "styled-components";
import { Text, Button, Input } from "../elements/element";
import { useDispatch } from "react-redux";
import user, { actionCreators as userActions } from "../redux/modules/user";
import ReactDOM from 'react-dom';
import {
  userIdCheck,
  pwdCheck,
  nicknameCheck,
  emailCheck,
} from "../shared/common";
import axios from "axios";
import Modal from "../components/ModalFind";
import Modal2 from "../components/ModalFind3";

const Signup = (props) => {
  const dispatch = useDispatch();
  const [isIdAvailable, setIdAvailable] = useState(false);

  //아이디, 비밀번호, 비밀번호 확인, 이름, 이메일 확인
  const [userId, setuserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  //아이디, 이메일 중복검사
  const [userId_check, setuserIdCheck] = useState(false);
  const [email_check, setEmailCheck] = useState(false);

  const [testId, setTestId] = useState("");
  const [testEmail, setTestEmail] = useState("");

  const checkuserId = () => {
    if (!userIdCheck(userId)) {
      openModal("아이디 형식이 맞지 않습니다!");
      return;
    } else {
      axios({
        method: "post",
        url: "/checkUserId",
        data: {
          id: userId,
        }
      })
        .then((res) => {
          console.log(res.data);
          if (res.data === "") {
            openModal("사용 가능한 아이디입니다!");
            setTestId(userId);
            setIdAvailable(true);
          } else {
            openModal("이미 사용 중인 아이디입니다!");
            setTestId("");
            setIdAvailable(false);
          }
          return res.data;
        }
        )
    }
  };
  

  const checkEmail = () => {
    if (!emailCheck(email)) {
      openModal("이메일 형식이 맞지 않습니다!");
      return;
    }
    axios({
      method: "post",
      url: "/checkEmail",
      data: {
        email: email,
      },
    })
      .then((res) => {
        if (!res.data) {
          openModal("사용 가능한 이메일입니다!");
          setTestEmail(email);
        } else {
          openModal("이미 사용 중인 이메일입니다!");
          setTestEmail("");
        }
      }
      )
      .catch((err) => {
        console.log("이메일 중복", err);
        openModal("이메일 중복확인에 문제가 생겼습니다!");
      });
  };

  //회원가입 시 입력 누락된 내역 있을 시 alert 띄워줌
  const signup = () => {
    if (
      userId === "" ||
      password === "" ||
      passwordCheck === "" ||
      email === "" ||
      nickname === ""
    ) {
      openModal("입력하지 않은 칸이 있습니다!!");
      return;
    }

    
    //회원가입 시 아이디, 비밀번호, 비밀번호 확인, 이름, 이메일 유효성 검사
    if (!userIdCheck(userId)) {
      openModal("아이디 형식이 맞지 않습니다!");
      return;
    }

    if (!pwdCheck(password)) {
      openModal("비밀번호 형식이 맞지 않습니다!");
      return;
    }

    if (password !== passwordCheck) {
      openModal("비밀번호와 비밀번호 확인이 일치하지 않습니다!");
      return;
    }

    if (!nicknameCheck(nickname)) {
      openModal("이름 형식이 맞지 않습니다!");
      return;
    }

    if (!emailCheck(email)) {
      openModal("잘못된 이메일 형식입니다!");
      return;
    }
    if(userId !== testId){
      openModal("아이디 중복확인을 해주세요!");
      return;
    }

    if(userId === testId && email === testEmail){
      //signupDB에 회원가입 시 입력한 내역들을 보내주기
      dispatch(
        axios({
          method: "post",
          url: "/signUp",
          data: {
            id: userId,
            pwd: password,
            name: nickname,
            email: email,
          },
        })
          .then((res) => {
            console.log(res.data);
            openModal2("회원가입이 완료되었습니다!");
          })
          .catch((err) => {
            console.log("회원가입 오류", err);
            openModal("회원가입에 문제가 생겼습니다!");
          })
      );
    }
    else{
      openModal("아이디 또는 이메일 중복확인을 해주세요!");
      return;
    }
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <RequiredBox>
        <Text size="12px" color="#666666">
          <CheckSpan>*</CheckSpan>필수입력사항
        </Text>
      </RequiredBox>
      <Line />
      <SignupTable>
        <tbody>
          <tr>
            <td>
              아이디<CheckSpan>*</CheckSpan>
            </td>
            <td>
              <Input
                placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                padding="14px"
                width="332px"
                _onChange={(e) => {
                  setuserId(e.target.value);
                }}
              />
              <text className="testIdplace" value={testId} type="hidden"/>

              <Button
                bold
                size="14px"
                bg="#ffffff"
                color="#5f0080"
                width="120px"
                padding="13px 14px"
                margin="8px"
                disabled={userId_check ? true : false}
                _onClick={() => checkuserId()}
              >
                중복확인
              </Button>
              {userId !== "" && !userIdCheck(userId) && (
                <InfoUl className="checkId">
                  <li>• 6자 이상의 영문 혹은 영문과 숫자를 조합</li>
                  <li>• 아이디 중복확인</li>
                </InfoUl>
              )}
              {userId !== "" && userIdCheck(userId) && (
                <InfoUl className="checkId">
                  <li>✓ 6자 이상의 영문 혹은 영문과 숫자를 조합</li>
                  <li>{isIdAvailable ? "✓ 아이디 중복확인" : "• 아이디 중복확인"}</li>
                </InfoUl>
              )}
              
            </td>
          </tr>

          <tr>
            <td>
              비밀번호<CheckSpan>*</CheckSpan>
            </td>
            <td>
              <Input
                placeholder="비밀번호를 입력해주세요"
                type="password"
                padding="14px"
                width="332px"
                _onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
             {password !== "" && (
                <InfoUl className="checkPw">
                  <li>{password.length >= 10 ? '✓' : '•'} 10글자 이상 입력</li>
                  <li>{/[a-zA-Z]/.test(password) ? '✓' : '•'} 영문/숫자/특수문자(공백 제외)만 허용, 2개 이상의 조합</li>
                  <li>{!(/(.)\1\1/.test(password)) ? '✓' : '•'} 동일한 숫자 3개 이상 연속 사용 불가</li>
                </InfoUl>
              )}
            </td>
          </tr>
          <tr>
            <td>
              비밀번호확인<CheckSpan>*</CheckSpan>
            </td>
            <td>
              <Input
                placeholder="비밀번호를 한번 더 입력해주세요"
                type="password"
                padding="14px"
                width="332px"
                _onChange={(e) => {
                  setPasswordCheck(e.target.value);
                }}
              />
              {password !== "" && !pwdCheck(passwordCheck) && (
                <InfoUl className="ReCheckPw">
                  <li>• 동일한 비밀번호를 입력해주세요.</li>
                </InfoUl>
              )}
              {password !== "" && pwdCheck(passwordCheck) && (
                <InfoUl className="ReCheckPw">
                  <li>✓ 동일한 비밀번호를 입력해주세요.</li>
                </InfoUl>
              )}
            </td>
          </tr>

          <tr>
            <td>
              이름<CheckSpan>*</CheckSpan>
            </td>
            <td>
              <Input
                placeholder="이름을 입력해주세요"
                padding="14px"
                width="332px"
                _onChange={(e) => {
                  setNickname(e.target.value);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>
              이메일<CheckSpan>*</CheckSpan>
            </td>
            <td>
              <Input
                placeholder="예: marketkurly@kurly.com"
                padding="14px"
                width="332px"
                _onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <text className="testEmailplace" value={testEmail} type="hidden" />
              <Button
                bold
                size="14px"
                bg="#ffffff"
                color="#5f0080"
                width="120px"
                padding="13px 14px"
                margin="8px"
                _onClick={() => {
                  if (!emailCheck(email)) {
                    openModal("잘못된 이메일 형식입니다");
                    return false;
                  }
                  checkEmail();
                }}
              >
                중복확인
              </Button>
            </td>
          </tr>

          
        </tbody>
      </SignupTable>
      <Button width="240px" _onClick={() => signup()}>
        가입하기
      </Button>
    </Container>
  );
};

Signup.defaultProps = {};

const Container = styled.div`
  width: 640px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  padding: 5px 0px 120px 0px;
`;

const Title = styled.h3`
  font-size: 28px;
  text-align: center;
  margin-top: 10px;
`;

const RequiredBox = styled.div`
  text-align: right;
  width: 100%;
  margin: 10px 0px 0px 0px;
`;

const CheckSpan = styled.span`
  color: #ee6a7b;
`;

const Line = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  background-color: #333333;
  margin-top: -2px;
`;

const SignupTable = styled.table`
  margin-top: 10px;
  padding-bottom: 49px;
  width: 100%;
  & tr {
    text-align: left;
    font-size: 14px;
    font-weight: 500;
  }
  & td {
    position: relative;
    padding-bottom: 16px;
  }
  & td:nth-child(1) {
    box-sizing: border-box;
    padding: 15px 0px 0px 18px;
    width: 152px;
    vertical-align: top;
  }
`;

const InfoUl = styled.ul`
  font-size: 12px;
  color: #666666;
  position: relative;
  left: -37px;
  font-weight: 400;
  list-style: none;
  margin-top: 4px;
`;

// 모달 창 열기
const openModal = (message) => {
  const modalContainer = document.createElement("div"); // 새로운 div 요소 생성
  document.body.appendChild(modalContainer); // body 요소에 새로운 div 요소 추가

  ReactDOM.render(
    <Modal isOpen={true} closeModal={() => closeModal(modalContainer)} message={message} />,
    modalContainer
  );
};

// 모달 창 닫기
const closeModal = (modalContainer) => {
  ReactDOM.unmountComponentAtNode(modalContainer);
  modalContainer.remove(); // div 요소 삭제
};

const openModal2 = (message) => {
  const modalContainer = document.createElement("div");
  document.body.appendChild(modalContainer);

  const closeModal2 = () => {
    ReactDOM.unmountComponentAtNode(modalContainer);
    modalContainer.remove();
  };

  ReactDOM.render(
    <Modal2 isOpen={true} closeModal={closeModal2} message={message} />,
    modalContainer
  );
};

export default Signup;