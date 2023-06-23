import React, { useEffect } from "react";
import styled from "styled-components";
import { Text, LoginBox } from "../elements/element";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const ConfirmPwd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [data, setData] = React.useState([]);

  const changeUsername = (e) => {
    setUsername(e);
  };

  const changePassword = (e) => {
    setPassword(e);
  };

  const checkInfo = () => {
    axios({
      method: "post",
      url: "/checkInfo",
      data: {
        id: username,
        pwd: password
      }
    })
    .then(response => setData(response.data));
  }

  useEffect(() => {
    if (data.id === username) {
        navigate("/modify");
    }
    else 
    {console.log("로그인 실패");} // 에러창 띄우기
  }, [data]);


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
      <div className="mainContainer">
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

          <LoginBox
              id="username"
              name="username"
            value={username}
            placeholder="아이디를 입력해주세요"
            _onChange={(e) => {
              changeUsername(e.target.value);
            }}
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

          {/* checkInfo 함수 실행 */}
          <ButtonSignup onClick={checkInfo}>
            <Text color="#ffffff" size="16px" margin="1px 0 0 0">
              확인
            </Text>
          </ButtonSignup>
        </LoginWrap>
      </div>
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

const ButtonSignup = styled.button`
  margin: 10px auto;
  width: 27%;
  height: 54px;
  border-radius: 3px;
  border: 1px solid #5f0081;
  background-color: #5f0080;
  cursor: pointer;
  display: block;
  overflow: hidden;
  text-align: center;
`;

export default ConfirmPwd;