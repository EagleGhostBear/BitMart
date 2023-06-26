import React, { useEffect, useState} from "react";
import styled from "styled-components";
import { Text, Button, Input } from "../elements/element";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import GenderRadioButton from "./GenderRadioButton";
import Navbar from "../components/NavigationBar";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import {
  userIdCheck,
  pwdCheck,
  nicknameCheck,
  emailCheck,
} from "../shared/common";


const Modify = (props) => {
  const dispatch = useDispatch();

  const token_key = `${localStorage.getItem("token")}`;
  const [data, setData] = React.useState([]);


  //로그인 되어 있는 아이디 값 불러오기
  useEffect(() => {
    axios({
      method: 'post',
      url: '/userUpdate',
      data: {
        seq: token_key,
      },
    })
      .then((res)=>{
        console.log(res.data)
        setData(res.data);
        setUsername(res.data);
        setGetname(res.data.name);
      })
  }, []);

  //회원탈퇴 페이지로 이동 
  const navigate = useNavigate();
  const handleDeleteClick = () => {
    navigate('/delete');
  };

  //아이디, 비밀번호, 비밀번호 확인, 이름, 이메일 확인
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [getName, setGetname] = React.useState("");

  //이메일 중복 확인
  const [email_check, setEmailCheck] = React.useState(false);
  const [testEmail, setTestEmail] = useState("");
  
  const checkEmail = () => {
    if (!emailCheck(email)) {
      alert("이메일 형식이 맞지 않습니다.");
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
        window.alert("사용 가능한 이메일입니다.");
        setTestEmail(email);
      } else {
        window.alert("이미 사용 중인 이메일입니다.");
        setTestEmail("");
      }
    })
    .catch((err) => {
      console.log("이메일 중복", err);
      window.alert("이메일 중복 확인에 문제가 발생했습니다.");
    });
};

  //회원 정보 변경 시, 빈 칸이 있을 경우 alert 띄우기
  const updateBtn = () => {
    if (
      password === "" ||
      passwordCheck === "" ||
      email === "" //||
      // nickname === ""
    ) {
      window.alert("빈 칸을 모두 입력해 주세요");
      return;
    }

    //비밀번호, 비밀번호 확인, 이름, 이메일 유효성 검사
    if (!pwdCheck(password)) {
      window.alert("비밀번호 형식이 맞지 않습니다");
      return;
    }

    if (password !== passwordCheck) {
      window.alert("동일한 비밀번호를 입력해주세요.");
      return;
    }

    // if (!nicknameCheck(nickname)) {
    //   window.alert("이름 형식이 맞지 않습니다");
    //   return;
    // }

    if (!emailCheck(email)) {
      window.alert("잘못된 이메일 형식입니다");
      return;
    }


    if(email === testEmail){
      dispatch(
        axios({
          method: "post",
          url: "/modifyMember",
          data: {
            seq: token_key,
            pwd: password,
            name: nickname,
            email: email,
          },
        })
          .then((res) => {
            console.log(res.data);
            window.alert("회원 정보가 수정되었습니다.");
            window.location.replace("/confirmPwd");
          })
          .catch((err) => {
            console.log("회원정보수정 실패", err);
            // window.alert("회원 정보 수정 실패");
          })
      );
    }
    else {
      window.alert("이메일 중복 확인을 해주세요.");
      return;
    }
  };

  //회원 탈퇴
  const handleDeleteUser = (e) => {
    e.preventDefault();;
    if (window.confirm('확인 버튼을 누르면 회원 정보가 삭제됩니다.')) { 
      axios
        .delete(
          
        ).then(() => {
          localStorage.clear();
          alert('그동안 이용해주셔서 감사합니다.');
          navigate('/');
        })
        .catch((err) => alert(err.response.data.message));
    } else {
      return;
    }
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
                  id="username"
                  name="username"
                  type="text"
                  value={data.id}
                  readOnly
                  style={inputStyle}
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
                  이름<CheckSpan></CheckSpan>
                </td>
                <td>
                {/* <input
                    id="nickname"
                    name="nickname"
                    _onChange={(e) => setNickname(e.target.value)}
                    style={inputStyle}
                /> */}
                {/* 회원정보 수정할 회원 이름 가져오기 */}
                <input
                  id="username"
                  name="username"
                  value={data.name}
                  style={inputStyle}
                />
                </td>
            </tr>
            <tr>
                <td>
                  이메일<CheckSpan>*</CheckSpan>
                </td>
                <td>
                <Input
                    placeholder="예: bitkurly@kurly.com"
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
                  성별
                </td>
                <td>
                    <GenderRadioButton />
                </td>
            </tr>
            </tbody>
        </SignupTable>
        <div
            className="formBtnDiv"
            style={formBtnDivStyle}
            >
            <button
                className="deleteBtn"
                type="button"
                style={buttonStyle}
                onClick={handleDeleteClick}
            >
                <span className="BtnText">
                탈퇴하기
                </span>
            </button>
            <button
                className="modifiyBtn"
                type="submit"
                onClick={() => updateBtn()}
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

const inputStyle= {
  margin: "10px auto",
  display: "block",
  borderRadius: "3px",
  border: "1px solid #e0dede",
  width: "332px",
  height: "38px",
  float: "left",
  maxWidth: "100%",
  padding: "0px 19px",
  boxSizing: "border-box",
  letterSpacing: "-0.05em",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#fff",
  fontSize: "14px",
  lineHeight: "20px",
  outline: "none",
};

export default Modify;