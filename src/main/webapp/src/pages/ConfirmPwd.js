import React, { useEffect } from "react";
import styled from "styled-components";
import { Text, LoginBox } from "../elements/element";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from "../components/NavigationBar";

const ConfirmPwd = () => {
  const token_key = `${localStorage.getItem("token")}`;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios({
      method: "post",
      url: "/getId",
      data: {
        seq: token_key
      }
    })
    .then((res) => {
      console.log(res.data);
      setData(res.data);
      setUsername(res.data);
    })
  }, []);

  const changeUsername = (e) => {
    setUsername(data.id)
  };

  const changePassword = (e) => {
    setPassword(e);
  };

  const checkInfo = () => {
    if(data.pwd === password){
      navigate('/modify')
    }
    else{
      alert('비밀번호를 확인해주세요.');
    }
  }

  // checkInfo 함수 실행 
  const login = () => {
    if (username === "" || password === "") {
      window.alert("아이디와 비밀번호를 입력해주세요.");
      return;
    } else {
      dispatch(userActions.loginDB(username, password));
    }
  };

  return (
    
    <React.Fragment>
        <LoginWrap>
          <Text
            bold
            margin="70px auto 34px"
            size="22px"
            width="100%"
            center="center"
          >
            개인 정보 수정
          </Text>

          <SubtitleWrap>
            비밀번호 재확인
            <DescriptionWrap>
              회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 확인해주세요.
            </DescriptionWrap>
          </SubtitleWrap>

          <input
              id="username"
              name="username"
              type="text"
              value={data.id}
              readOnly
              style={inputStyle}
          />

          <LoginBox
          id="password"
          name="password"
            value={password}
            type="password"
            placeholder="비밀번호를 입력해주세요"
            _onChange={(e) => {
              changePassword(e.target.value);
            }}
          />

          <ButtonConfirm onClick={checkInfo}>
            <Text color="#ffffff" size="16px" margin="1px 0 0 0">
              확인
            </Text>
          </ButtonConfirm>
        </LoginWrap>
    </React.Fragment>
  );
};

const LoginWrap = styled.div`
  margin: 0px auto 100px 0px;
  justify-content: center;
  text-align: center;
`;

const SubtitleWrap = styled.div`
  margin: 0px auto 40px 0px;
  justify-content: center;
  text-align: center;
`;

const DescriptionWrap = styled.div`
  margin: 0px auto 40px 0px;
  justify-content: center;
  text-align: center;
  font-size: 12px;
`;

const ButtonConfirm = styled.button`
  margin: 10px auto;
  width: 17%;
  height: 54px;
  border-radius: 3px;
  border: 1px solid #5f0081;
  background-color: #5f0080;
  cursor: pointer;
  display: block;
  overflow: hidden;
  text-align: center;
`;

const inputStyle = {
  margin: "10px auto",
  display: "block",
  borderRadius: "3px",
  border: "1px solid #e0dede",
  width: "17%",
  maxWidth: "100%",
  height: "54px",
  padding: "0px 19px",
  boxSizing: "border-box",
  letterSpacing: "-0.05em",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#fff",
  fontSize: "14px",
  lineHeight: "20px",
  outline: "none",
}

export default ConfirmPwd;