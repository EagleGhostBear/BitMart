import React, { useEffect, useState} from "react";
import styled from "styled-components";
import { Text, Button, Input } from "../elements/element";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import GenderRadioButton from "./GenderRadioButton";
import Navbar from "../components/NavigationBar";
import axios from "axios";

import {
  userIdCheck,
  pwdCheck,
  nicknameCheck,
  emailCheck,
} from "../shared/common";



const Modify = (props) => {
  const dispatch = useDispatch();
  const token_key = `${localStorage.getItem("token")}`;


  useEffect(() => {
    axios({
      method: 'post',
      url: '/userUpdate',
      data: {
        seq: token_key,
      },
    })
      .then((res)=>{
        // console.log(res)
        const { username } = res.data;
        setUsername(username);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  }, []);


  //아이디, 비밀번호, 비밀번호 확인, 이름, 이메일 확인
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [email, setEmail] = React.useState("");

  //이메일 중복검사
  const [email_check, setEmailCheck] = React.useState(false);

  const checkEmail = () => {
    if (!emailCheck(email)) {
      alert("이메일 형식이 맞지 않습니다");
      return;
    }
    dispatch(userActions.emailCheckF(email));
  };

  //회원 정보 변경 시, 빈 칸이 있을 경우 alert 띄우기
  const Modify = () => {
    if (
      username === "" ||
      password === "" ||
      passwordCheck === "" ||
      email === "" ||
      nickname === ""
    ) {
      window.alert("빈 칸을 모두 입력해 주세요");
      return;
    }

    //회원가입 시 아이디, 비밀번호, 비밀번호 확인, 이름, 이메일 유효성 검사
    if (!userIdCheck(username)) {
      window.alert("아이디 형식이 맞지 않습니다");
      return;
    }

    if (!pwdCheck(password)) {
      window.alert("비밀번호 형식이 맞지 않습니다");
      return;
    }

    if (password !== passwordCheck) {
      window.alert("동일한 비밀번호를 입력해주세요.");
      return;
    }

    if (!nicknameCheck(nickname)) {
      window.alert("이름 형식이 맞지 않습니다");
      return;
    }

    if (!emailCheck(email)) {
      window.alert("잘못된 이메일 형식입니다");
      return;
    }

    //signupDB에 회원가입 시 입력한 내역들을 보내주기
    dispatch(
      userActions.signupDB(username, password, passwordCheck, email, nickname)
    );
  };

  return (
    <div className="mainContainer"
        style={{ 
            display: 'flex',
            justifyContent: 'center',
            marginTop: '100px',
            marginRight: '100px',
        }}
    >

        {/* 네비게이션 바 */}
        <div style={{ marginRight: '20px'}}>
          <Navbar />
        </div>

        <Container>
        <Title>개인 정보 수정</Title>
        <RequiredBox>
            <Text size="13px" color="#666666">
            <CheckSpan> * </CheckSpan>필수 입력사항
            </Text>
        </RequiredBox>
        <Line />
        <SignupTable>
            <tbody>
            <tr>
                <td>
                아이디
                </td>
                <td>
                <input
                  type="text"
                  value={username}
                    placeholder=""
                    padding="14px"
                    width="332px"
                    readOnly
                    _onChange={(e) => {
                    setUsername(e.target.value);
                    }}
                />
                </td>
            </tr>
            <tr>
                <td>
                새 비밀번호<CheckSpan>*</CheckSpan>
                </td>
                <td>
                <Input
                    placeholder="새 비밀번호를 입력해 주세요"
                    type="password"
                    padding="14px"
                    width="332px"
                    _onChange={(e) => {
                    setPassword(e.target.value);
                    }}
                />
                {password !== "" && !pwdCheck(password) && (
                    <InfoUl className="checkPw">
                    <a> 10자 이상 입력</a>
                    </InfoUl>
                )}
                </td>
            </tr>
            <tr>
                <td>
                새 비밀번호 확인<CheckSpan>*</CheckSpan>
                </td>
                <td>
                <Input
                    placeholder="새 비밀번호를 다시 입력해 주세요"
                    type="password"
                    padding="14px"
                    width="332px"
                    _onChange={(e) => {
                    setPasswordCheck(e.target.value);
                    }}
                />
                {password !== "" && !pwdCheck(passwordCheck) && (
                    <InfoUl className="ReCheckPw">
                    <a>동일한 비밀번호를 입력해주세요.</a>
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
                    placeholder="이름을 입력해 주세요"
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
                이메일<CheckSpan> * </CheckSpan>
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
                        alert("잘못된 이메일 형식입니다");
                        return false;
                    }
                    checkEmail();
                    }}
                >
                    중복확인
                </Button>
                </td>
            </tr>
            <tr>
                <td>
                성별<CheckSpan>*</CheckSpan>
                </td>
                <td>
                    <GenderRadioButton />
                </td>
            </tr>
            </tbody>
        </SignupTable>
        {/* <Button width="150px" _onClick={() => ()}>
            탈퇴하기
        </Button>
        <Button width="150px" _onClick={() => Modify()}>
            회원정보수정 
        </Button> */}
        <div
            className="formBtnDiv"
            style={formBtnDivStyle}
            >
            <button
                className="deleteBtn"
                type="button"
                style={buttonStyle}
            >
                <span className="BtnText">
                탈퇴하기
                </span>
            </button>
            <button
                className="modifiyBtn"
                type="submit"
                // onClick={}
                style={modifyBtnStyle}
            >
                <span className="BtnText">
                회원정보수정
                </span>
            </button>
            </div>
        </Container>
    </div>
  );
};

Modify.defaultProps = {};

const Container = styled.div`
  width: 640px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-left: 50px;
`;

const Title = styled.h3`
  font-size: 28px;
  text-align: center;
  margin-top: 10px;
`;

const RequiredBox = styled.div`
  text-align: right;
  width: 100%;
  margin: 0px 0px 0px 0px;
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
  font-size: 14px;
  color: red;
  position: relative;
  left: -37px;
  font-weight: 400;
  list-style: none;
  margin-top: 4px;
`;

const formBtnDivStyle = {
  padding: "0px",
  margin: "0px",
  boxSizing: "border-box",
  borderTop: "1px solid rgb(244, 244, 244)",
  display: "flex",
  WebkitBoxPack: "center",
  justifyContent: "center",
  marginTop: "20px",
  paddingTop: "40px",
};

const buttonStyle = {
  boxSizing: "border-box",
  font: "inherit",
  WebkitTapHighlightColor: "transparent",
  textTransform: "none",
  appearance: "button",
  cursor: "pointer",
  fontSize: "14px",
  fontFamily: '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
  padding: "0px 10px",
  overflow: "hidden",
  border: "1px solid rgb(95, 0, 128)",
  display: "block",
  textAlign: "center",
  color: "rgb(95, 0, 128)",
  backgroundColor: "rgb(255, 255, 255)",
  margin: "0px 3px",
  borderRadius: "3px",
  width: "120px",
  height: "44px",
};

const modifyBtnStyle = {
  ...buttonStyle,
  border: "0px none",
  backgroundColor: "rgb(95, 0, 128)",
  color: "rgb(255, 255, 255)",
};


export default Modify;