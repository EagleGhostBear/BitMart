import React, { useState } from "react";
import styled from "styled-components";
import { Text, Button, Input } from "../elements/element";
import { useDispatch } from "react-redux";
import DeleteCheckbox from "./DeleteCheckbox";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import axios from 'axios';
import Modal from "../components/ModalConfirm";
import ReactDOM from 'react-dom';


const Delete = (props) => {
  const dispatch = useDispatch();
  const token_key = `${localStorage.getItem("token")}`;

  const navigate = useNavigate();
  const handleCancelClick = () => {
    navigate('/confirmPwd');
  };

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
    })
  }, []);

  const checkInfo = () => {
    if(data.pwd === password) {
      openModal('회원탈퇴가 완료되었습니다. 그동안 이용해 주셔서 감사합니다.');
      axios({
        method: "post",
        url: "/deleteUser",
        data: {
          seq: token_key
        } 
    }).then(() => {
      localStorage.setItem("token", null);
      window.location.replace("/")
    })
    }
    else {
      openModal('비밀번호를 확인해주세요.');
    }
  }

  return (
    <div className="mainContainer"
        style={{
          margin: "50px"
        }}
    >
        <Container>
        <Title>회원탈퇴안내</Title>
        <Line />
        <DeleteTable>
            <tbody>
                <tr>
                    <td>
                    회원탈퇴안내
                    </td>
                    <td>
                    불편하셨던 점이나 불만사항을 알려주시면 적극 반영해서 고객님의 불편함을 해결해 드리도록 노력하겠습니다.
                    <br/>
                    <p 
                      style={{ 
                        color: 'purple',
                        marginTop: '30px',
                        marginBottom: '30px'
                        }}>
                        아울러 회원 탈퇴시의 아래 사항을 숙지하시기 바랍니다.
                    </p>
                    1. 회원 탈퇴 시 고객님의 정보는 상품 반품 및 A/S를 위해 전자상거래 등에서의 소비자 보호에 관한 법률에 의거한 고객정보 보호정책에 따라 관리됩니다.
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
                        placeholder="현재 비밀번호를 입력해 주세요"label
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
                    {/* 체크박스 */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="checkboxDiv">
                            <DeleteCheckbox />
                        </div>
                        <div className="checkboxText" 
                             style={{  
                                marginLeft: '20px',
                                marginRight: '70px',
                                marginBottom: '10px' }}>
                            고객 서비스 불만
                        </div>
                        <div className="checkboxDiv">
                            <DeleteCheckbox />
                        </div>
                        <div className="checkboxText" 
                             style={{ marginLeft: '20px', marginBottom: '10px' }}>
                            교환/환불/반품 불만
                        </div>   
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="checkboxDiv">
                            <DeleteCheckbox />
                        </div>
                        <div className="checkboxText" 
                             style={{  
                                marginLeft: '20px',
                                marginRight: '70px', 
                                marginBottom: '10px' }}>
                             방문 빈도가 낮음
                        </div>
                        <div className="checkboxDiv">
                            <DeleteCheckbox />
                        </div>
                        <div className="checkboxText" 
                             style={{ marginLeft: '20px', marginBottom: '10px' }}>
                            개인정보 유출 우려
                        </div>   
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="checkboxDiv">
                            <DeleteCheckbox />
                        </div>
                        <div className="checkboxText" 
                             style={{  
                                marginLeft: '20px',
                                marginRight: '70px', 
                                marginBottom: '10px' }}>
                            쇼핑몰 기능 불만
                        </div>
                        <div className="checkboxDiv">
                            <DeleteCheckbox />
                        </div>
                        <div className="checkboxText" 
                             style={{ marginLeft: '20px', marginBottom: '10px' }}>
                            상품 가격 불만
                        </div>   
                    </div>
                </tr>
            </tbody>
        </DeleteTable>

        <div
            className="formBtnDiv"
            style={formBtnDivStyle}
            >
            <button
                className="cancelBtn"
                type="button"
                style={buttonStyle}
                onClick={handleCancelClick}
            >
                <span className="BtnText">
                취소
                </span>
            </button>
            <button
                className="deleteBtn"
                type="submit"
                onClick={checkInfo}
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

Delete.defaultProps = {};

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

const Line = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  background-color: #333333;
  margin-top: -2px;
`;

const DeleteTable = styled.table`
  margin-top: 10px;
  /* padding-bottom: 49px; */
  width: 100%;
  & tr {
    text-align: left;
    font-size: 13px;
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
    width: 230px;
    vertical-align: top;
  }
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

export default Delete;