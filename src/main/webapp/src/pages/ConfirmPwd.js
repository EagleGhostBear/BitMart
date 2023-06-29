import React, { useEffect } from "react";
import styled from "styled-components";
import { Text, LoginBox } from "../elements/element";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from "../components/NavigationBar";
import Modal from "../components/ModalConfirm";
import ReactDOM from 'react-dom';

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
      openModal('비밀번호를 확인해주세요.');
    }
  }

  // checkInfo 함수 실행 
  const login = () => {
    if (username === "" || password === "") {
      openModal('아이디와 비밀번호를 입력해주세요.');
      return;
    } else {
      dispatch(userActions.loginDB(username, password));
    }
  };

  return (
    <React.Fragment>

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
        <LoginWrap>
          <Text
            bold
            margin="10px auto 34px"
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

          <Line />

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
        </Container>
        </div>
    </React.Fragment>
  );
};

// 모달 창 열기
const openModal = (message) => {
  const modalContainer = document.createElement("div"); 
  document.body.appendChild(modalContainer);

  ReactDOM.render(
    <Modal isOpen={true} closeModal={() => closeModal(modalContainer)} message={message} />,
    modalContainer
  );
};

// 모달 창 닫기
const closeModal = (modalContainer) => {
  ReactDOM.unmountComponentAtNode(modalContainer);
  modalContainer.remove();
};

const Container = styled.div`
  width: 640px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-left: 50px;
`;

const LoginWrap = styled.div`
  margin: 0px auto 100px 0px;
  justify-content: center;
  text-align: center;
`;

const SubtitleWrap = styled.div`
  margin: 0px auto 40px 0px;
  justify-content: center;
  text-align: left;
  font-size: 18px;
  font-weight: 700;
`;

const DescriptionWrap = styled.div`
  margin: 0px auto 40px 0px;
  justify-content: center;
  text-align: left;
  font-size: 13px;
  margin-top: 5px;
  color: gray;
`;

const ButtonConfirm = styled.button`
  margin: 10px auto;
  width: 350px;
  height: 54px;
  border-radius: 3px;
  border: 1px solid #5f0081;
  background-color: #5f0080;
  cursor: pointer;
  display: block;
  overflow: hidden;
  text-align: center;
`;

const Line = styled.span`
  display: block;
  width: 100%;
  height: 1.5px;
  background-color: #333333;
  margin-top: -20px;
  margin-bottom: 20px;
`;

const inputStyle = {
  margin: "10px auto",
  display: "block",
  borderRadius: "3px",
  border: "1px solid #e0dede",
  // width: "25%",
  width: "350px",
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