import React from 'react';
import styled from "styled-components";

const Modal = ({isOpen, closeModal, message}) => {
  return (
    <ModalContainer style={{ display: isOpen ? "block" : "none" }}>
      <Modal2>
        <ModalContent>
          {message}
        </ModalContent>
        <ModalFooter onClick={closeModal}><Check
        >확인</Check></ModalFooter>
      </Modal2>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
overflow: none;
background-color: rgba(0,0,0,0.4);
`;

const Modal2 = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

const ModalContent = styled.div`
width: 340px;
background-color: #fefefe;
border-radius: 20px 20px 0px 0px;
padding: 40px 20px;
font-size: 15.5px;
font-weight: 550;
text-align: center;
letter-spacing: 0px;
`;

const ModalFooter = styled.div`
display: flex;
width: 340px;
padding: 20px 20px;
color: #5f0080;
font-size: 17px;
font-weight: bold;
justify-content: center;
align-items: center;
height: 55px;
background-color: #fefefe;
border-radius: 0px 0px 20px 20px;
border-top: 1px solid #f7f7f7; 
padding: 0px 20px;
margin-top: 0px;
cursor: pointer;
`;

const Check = styled.div`
justify-content: center;
text-align: center;
cursor: pointer;
`;

export default Modal;