import React, { useState} from "react";
import styled from "styled-components";
import { Text, Button, Input } from "../elements/element";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import DeleteCheckbox from "./DeleteCheckbox";
import Navbar from "../components/NavigationBar";

import {
  userIdCheck,
  pwdCheck,
  nicknameCheck,
  emailCheck,
} from "../shared/common";

const Modify = (props) => {
  const dispatch = useDispatch();

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

    //dssf

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
            alignItems: 'center',
            height: '100vh',
            maxWidth: '1200px',
            margin: '0 auto'
        }}
    >

        <Container>
        <Title>회원탈퇴안내</Title>
        <Line />
        <SignupTable>
            <tbody>
                <tr>
                    <td>
                    회원탈퇴안내
                    </td>
                    <td>
                    불편하셨던 점이나 불만사항을 알려주시면 적극 반영해서 고객님의 불편함을 해결해 드리도록 노력하겠습니다.
                    <br/><br/>
                    <p>
                        아울러 회원 탈퇴시의 아래 사항을 숙지하시기 바랍니다.</p>
                    <br/>
                    1. 회원 탈퇴 시 고객님의 정보는 상품 반품 및 A/S를 위해 전자상거래 등에서의 소비자 보호에 관한 법률에 의거한 고객정보 보호정책에 따라 관리 됩니다.
                    <br/>
                    2. 회원 탈퇴 시 고객님께서 보유하셨던 적립금은 모두 삭제 됩니다.
                    <br/>
                    3. 회원 탈퇴 후 3개월간 재가입이 불가능합니다.
                    </td>
                </tr>

                <tr>
                    <td>
                    비밀번호 입력
                    </td>
                    <td>
                    <Input
                        placeholder="현재 비밀번호를 입력해 주세요"
                        type="password"
                        padding="14px"
                        width="332px"
                        _onChange={(e) => {
                        setPassword(e.target.value);
                        }}
                    />
                    </td>
                </tr>
                <tr>
                    <td>
                    무엇이 불편하였나요?
                    </td>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="checkBoxDiv">
                            <DeleteCheckbox />
                        </div>
                        <div className="checkboxText" style={{ marginLeft: '20px' }}>
                            고객서비스(상담, 포장 등) 불만
                        </div>
                        
                    </div>
                </tr>
                <tr>
                    <td>
                    (의견 작성란)
                    </td>
                    <td>
                        <textarea
                            placeholder="고객님의 진심어린 충고 부탁드립니다."
                            style={{ 
                                padding: "14px", 
                                width: "450px",
                                height: "180px",
                                resize: "none" }}
                        />
                    </td>
                </tr>
            </tbody>
        </SignupTable>

        <div
            className="formBtnDiv"
            style={formBtnDivStyle}
            >
            <button
                className="cancleBtn"
                type="button"
                style={buttonStyle}
            >
                <span className="BtnText">
                취소
                </span>
            </button>
            <button
                className="deleteBtn"
                type="submit"
                // onClick={}
                style={deleteBtnStyle}
            >
                <span className="BtnText">
                탈퇴
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
    /* width: 152px; */
    width: 250px;
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

const deleteBtnStyle = {
  ...buttonStyle,
  border: "0px none",
  backgroundColor: "rgb(95, 0, 128)",
  color: "rgb(255, 255, 255)",
};


export default Modify;