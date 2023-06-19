import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
//import NewAddress from "./NewAddress";
//import PopupDom from './NewAddress';
import Modal from 'react-modal';

import DaumPostcode from 'react-daum-postcode';

import './Address.css';


// 배송지 선택 확인 모달
const PopupModal2 = ({ isOpen2, closeModal2 }) => {

  const customStyles2 = {
    content: {
      width: '18%', // Set the desired width
      height: '18%', // Set the desired height
      margin: 'auto', // Center the modal horizontally
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      //textAlign: 'center',
      //padding: 'auto',
      fontFamily: 'NanumGothic',
      fontSize: '11pt',
    },
  };


  return (
                          // onRequestClose => 모달 외부 화면 눌렀을 때 동작하는 함수
    <Modal isOpen={isOpen2} onRequestClose={closeModal2} style={customStyles2}>
      {/* Content of your modal */}
        <div style={ {paddingTop: '6px',}}>
        <h2 style={{ textAlign:'center', fontSize:'15pt'}}>배송지 선택이 완료되었습니다</h2>
        <div className="CloseBtn" style={ {
            paddingTop: '27px',
            display: 'flex',
            justifyContent: 'center',

        }}>
          &ensp;
          <button 
            className="closeBtn"
            onClick={closeModal2}
          >확인</button>
        </div>      
      </div>
    </Modal>
  );
};


// 삭제 확인 모달
const PopupModal3 = ({ isOpen3, closeModal3 }) => {

  const customStyles3 = {
    content: {
      width: '18%', // Set the desired width
      height: '18%', // Set the desired height
      margin: 'auto', // Center the modal horizontally
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      //textAlign: 'center',
      //padding: 'auto',
      fontFamily: 'NanumGothic',
      fontSize: '11pt',
    },
  };


  return (

    <Modal isOpen={isOpen3} onRequestClose={closeModal3} style={customStyles3}>
      {/* Content of your modal */}
        <div style={ {paddingTop: '6px',
                 
      }}>
        <h2 style={{ textAlign:'center', fontSize:'16pt'}}>삭제하시겠습니까?</h2>
        <div className="CloseBtn" style={ {
            paddingTop: '25px',
            display: 'flex',
            justifyContent: 'center',

        }}>
          &ensp;
        <button 
          className="closeBtn"
          onClick={closeModal3}
        >삭제</button>
        </div>      
      </div>
    </Modal>
  );
};



export default function Component() {


  const [checkboxes, setCheckboxes] = useState(['checkbox1']);    // 초기값 설정

  const handleCheckboxChange = (value) => {

    // 체크박스가 이미 선택된 경우 ('checkboxs'배열에 value 값 존재하는지 확인)
    if (checkboxes.includes(value)) {
      return;     // 아무것도 수행하지 않는다 (눌렀을 때 체크 해제 X)
    } 

    // 배열에 value 값이 존재한다면, 
    // filter 메소드 사용하여 해당 값 배열에서 필터링 후 해당 배열 상태 업데이트
    if (checkboxes.includes(value)) {
      setCheckboxes(checkboxes.filter((checkbox) => checkbox !== value));
      
    } else {
      setCheckboxes([value]);
    }
  }
  


  // 배송지 선택 확인 모달
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal2 = () => {
    //setAddress1('');
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };


  //배송지 삭제 확인 모달
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  const openModal3 = () => {
    setIsModalOpen3(true);
  };

  const closeModal3 = () => {
    setIsModalOpen3(false);
  };

  
  // 새 배송지 추가 모달
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState({
    streetNameAddress: '',
    detailedAddress: '',
    name:'',
    phone:'',
  });
  const [showPostcode, setShowPostcode] = useState(false);

  const openModal = () => {
    // 주소 입력 필드 reset
    setAddress({
      streetNameAddress: '',
      detailedAddress: '',
      name:'',
      phone:'',
    });
    
    //setName(''); // Reset the name field
    //setPhone(''); // Reset the phone field

    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }


    // 주소 정보 상태 업데이트 
    setAddress({
      ...address,
      streetNameAddress: fullAddress,
      detailedAddress: '',
      name:'',
      phone:'',
    });

    setShowPostcode(false);   //주소창 모달 닫기
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm('삭제하시겠습니까?');
    if (confirmDelete) {
      //deleteData(); // Perform delete operation
      window.confirm('삭제되었습니다');
      closeModal(); // Close the modal
    }
  };

  const customStyles = {
    content: {
        width: '25%', // Set the desired width
        height: '55%', // Set the desired height
        margin: 'auto', // Center the modal horizontally
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        //textAlign: 'center',
        //padding: 'auto',
        fontFamily: 'NanumGothic',
        fontSize: '11pt',
        outline: 'none',
        overflow: 'auto', // Hide the scrollbar
      },
  };

  const postCodeStyle = {
    display: 'flex',
    alignItems:'center',
    position: 'absolute',
    //top: '10%',
    marginLeft:'-20px',
    //paddingLeft:'-10%',
    paddingTop:'15px',
    width: '100%',
    height: '100%',
    overflow:'hidden',
    overflowY:'hidden',
    
  };

  // 스크롤바 숨기면서 스크롤 되게 하기
  const hideScrollbarStyles = `
  ::-webkit-scrollbar {
    width: 0;
  }
  
  /* Firefox */
  scrollbar-width: none;
`;


  // 배송지 유효성 검사

  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');


  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handlePhoneChange = (e) => {
  //   setPhone(e.target.value);
  // };

  const [errorMessage, setErrorMessage] = useState('');

  // 저장 유효성 검사
  const handleSave = () => {

    if (
      !address.streetNameAddress ||
      !address.detailedAddress ||
      address.detailedAddress.trim() === '' ||      // 공백 문자로만 이루어진 경우
      !address.name ||
      !address.phone
    ) 
    
    {
      alert('배송지 정보를 모두 입력해주세요');

      if (!address.streetNameAddress) {
        setErrorMessage('배송지 주소를 입력해주세요.');
      } else if (!address.detailedAddress) {
        setErrorMessage('상세 주소를 입력해주세요.');
      } else if (!address.name) {
        setErrorMessage('이름을 입력해주세요.');
      } else if (!address.phone) {
        setErrorMessage('휴대폰 번호를 입력해주세요.');
      }
      return;   // 유효성 검사 실패 시, 함수 종료 후 이후 동작 수행 X
    }

    // 배송지 정보가 모두 입력되었을 때, 저장 버튼을 누른 후 수행할 동작
    setErrorMessage('');
    alert('배송지가 등록되었습니다.');
    closeModal();
  
  };



  return (
    <>
      <div className="MyPage">

    {/* 배송지 수정 & 선택 모달페이지 */}

    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
    <style>{hideScrollbarStyles}</style>
        <div style={{ paddingTop: '5px', }}>
          <h2>&ensp;새 배송지 등록</h2>
          <br/>
          <span>&ensp;배송지 입력&ensp;</span>

          <button
            className="FindAddressBtn"
            onClick={() => setShowPostcode(!showPostcode)}
          >
            주소찾기
          </button>

          <div className="addressField">
            <input
              name="streetNameAddress"
              value={address.streetNameAddress}
              onChange={(e) => setAddress({ ...address, streetNameAddress: e.target.value })}
              ///onBlur={ handleSave }
              //onChange={handleSave}
              readOnly
              />
              {!address.streetNameAddress && <div className="error-message">배송지 주소를 입력해주세요</div>}
          </div>

          <div className="addressField">
              <input
                name="detailedAddress"
                value={address.detailedAddress}
                onChange={(e) => setAddress({ ...address, detailedAddress: e.target.value })}
                //onChange={handleSave}
                placeholder="  상세 주소"
                />
                {!address.detailedAddress && <div className="error-message">상세 주소를 입력해주세요</div>}
          </div>

          <p>&ensp;받으실 분</p>
          <div className="addressField">
            <input
              name="name"
              value={address.name}
              onChange={(e) => setAddress({ ...address, name: e.target.value })}
            />
            {!address.name && <div className="error-message">이름을 입력해주세요</div>}
          </div>

          <p>&ensp;휴대폰</p>
          <div className="addressField">
            <input
              name="phone"
              value={address.phone}
              onChange={ (e) => setAddress({ ...address, phone: e.target.value }) }
              placeholder="  숫자만 입력해주세요"
            />
            {!address.phone && <div className="error-message">휴대폰 번호를 입력해주세요</div>}
            {address.phone && !/^010\d{8}$/.test(address.phone) && (
              <div className="error-message">올바른 휴대폰 번호 형식이 아닙니다</div>
            )}
          </div>

          <div className="Btn" style={{ }}>
            <button
              id="updateBtn"
              onClick={ handleSave }
              //disabled={!address.streetNameAddress || !address.detailedAddress}
            >
              저장
            </button>
          </div>
        </div>
      </Modal>

    <div> 
      {isModalOpen2 && (
        <PopupModal2 isOpen2={isModalOpen2} closeModal2={closeModal2} />
      )}
    </div>

    <div> 
      {isModalOpen3 && (
        <PopupModal3 isOpen3={isModalOpen3} closeModal3={closeModal3} />
      )}
    </div>

    {showPostcode && (
        <Modal isOpen={true} onRequestClose={() => setShowPostcode(false)} style={customStyles}>
          <div >
            <button
              id="xBtn"
              onClick={() => setShowPostcode(false)}
            >
             X
            </button>
          
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} autoClose={true} />
         </div>
        </Modal>
      )}



        {/* 좌측 네비게이션 바 */}

        <div className="NavHeader"
            style={ {
              marginLeft:'-5.7%',
            }}>
          <div className="NavTitle">
            마이컬리
          </div>
          <ul className="NavMain">
            <li className="NavDetail">
              <a href="/order" className="Order"style={{
                    backgroundColor:'white',
                  }}>
                주문내역
                
                {/* svg, g태그 : 이미지 사용할때! => 화살표 태그 이미지 삽입 */}
                <svg
                  id="Arrow"
                  height="19"
                  width="19"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <path
                      id="gfk9q0rhta"
                      d="M1.657 1.657L9.657 1.657 9.657 9.657"      /* 화살표 이미지 경로 */
                    />
                  </defs>
                  <g
                    fill="none"
                    fillRule="evenodd"
                  >
                    
                    <g
                      transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)"
                    >
                      <use
                        id="arrowIcon"
                        stroke="#999"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        transform="rotate(45 5.657 5.657)"
                        xlinkHref="#gfk9q0rhta"
                      />
                    </g>   
                  </g>
                </svg>
              </a>
            </li>
            
            
            <li className="NavDetail" style={{ }} >
              <a href="/address" className="Address">
                배송지 관리
                <svg
                  id="Arrow"
                  height="19"
                  width="19"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <defs>
                    <path
                      id="gfk9q0rhta"
                      d="M1.657 1.657L9.657 1.657 9.657 9.657"
                    />
                  </defs>
                    <g
                      fill="none"
                      fillRule="evenodd" 
                    >
                    
                      <g
                        transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)"
                      >
                        <use
                          id="arrowIcon"
                          stroke="#5f0080"      // 화살표 색상
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                          transform="rotate(45 5.657 5.657)"
                          xlinkHref="#gfk9q0rhta"
                        />
                      </g>
                      
                  </g>
                </svg>
              </a>
            </li>
            
            <li className="NavDetail">
              <a href="/review" className="Review">
                상품후기
                <svg
                  id="Arrow"
                  height="19"
                  width="19"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <path
                      id="gfk9q0rhta"
                      d="M1.657 1.657L9.657 1.657 9.657 9.657"
                    />
                  </defs>
                  <g
                    fill="none"
                    fillRule="evenodd"
                  >
                    
                    <g
                      transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)"
                    >
                      <use
                        id="arrowIcon"
                        stroke="#999"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        transform="rotate(45 5.657 5.657)"
                        xlinkHref="#gfk9q0rhta"
                      />
                    </g>
                  
                  </g>
                </svg>
              </a>
            </li>

            <li className="NavDetail">
              <a href="/ConfirmPwd" className="Info">
                개인 정보 수정
                <svg
                  id="Arrow"
                  height="19"
                  width="19"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs >
                    <path
                      id="gfk9q0rhta"
                      d="M1.657 1.657L9.657 1.657 9.657 9.657"
                    />
                  </defs>
                  <g
                    fill="none"
                    fillRule="evenodd"
                  >
                    
                    <g
                      transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)"
                    >
                      <use
                        id="arrowIcon"
                        stroke="#999"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        transform="rotate(45 5.657 5.657)"
                        xlinkHref="#gfk9q0rhta"
                      />
                    </g>     
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </div>


        <div className="AddressMain" 
              style={ {
                marginTop:'8px',
                //marginRight:'3px',
                
              }}
        >
          <div className="AddressMain-1" 
                style={{
                  
                }}>
            <div
              className="AddressMainTitle">
              <div
                className="AddressMainTitle-1">
                <div
                  className="css-fhxb3m e1af7ryb4"
                  style={{ 
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    //border: "2px solid skyblue",
                  }}
                >
                  <span
                    className="css-1268zpe e1af7ryb5"
                    style={{
                      fontWeight: 500,
                      fontSize: "24px",
                      color: "rgb(51, 51, 51)",
                      letterSpacing: "-0.5px",
                      lineHeight: "48px",
                      //border: "2px solid magenta",
                    }}
                  >
                    배송지 관리
                  </span>
                  <span
                    className="css-a3vgo2 e1af7ryb3"
                    style={{
                      paddingLeft: "13px",
                      fontSize: "14px",
                      letterSpacing: "-0.3px",
                      color: "rgb(153, 153, 153)",
                      lineHeight: "20px",
                    }}
                  >
                    배송지에 따라 상품정보 및 배송유형이 달라질 수 있습니다.
                  </span>
                </div>
                <div>
                  <div
                    className="NewAddressAdd"
                    style={{
                      
                      
                    }}
                  >
                    <div>
                      {/* 새 배송지 추가 버튼 클릭 시 주소 api 새 창 띄움 */}
                      {/* <Link to='/address-shipping' > */}
                      <button
                        onClick={ openModal }
                        
                        className="NewAdressBtn"
                        type="button"
                        height="60"
                      >
                        <span
                          className="NewAddressText" >
                          <img      // + 버튼 이미지
                            className="PlusBtn"
                            src="https://res.kurly.com/pc/ico/2006/ico_add_16x16.svg"
                          />
                          새 배송지 추가
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div
              className="IndexBar" >
              <div
                className="css-wru9pk e1cucsfi0"
                style={{
                  flexBasis: "60px",
                }}
              >
                선택
              </div>
              <div
                className="css-3fr0n1 e1cucsfi0"
                style={{
                  flex: "1 1 0%",
                }}
              >
                주소
              </div>
              <div
                className="css-gtglzf e1cucsfi0"
                style={{
                  flexBasis: "120px",
                }}
              >
                받으실 분
              </div>
              <div
                className="css-1aqlhfo e1cucsfi0"
                style={{
                  flexBasis: "100px",
                }}
              >
                연락처
              </div>
              
              <div
                className="css-wru9pk e1cucsfi0"
                style={{
                  textAlign: "center",
                  lineHeight: "20px",
                  fontWeight: 500,
                  flexBasis: "60px",
                }}
              >
                삭제
              </div>
            </div>
            <ul
              className="AddressList">
              <li className="AddressList-1">
                <div id="AddressList-1">

                    <div id="checkBtn">

                    <label htmlFor="checkbox">
                      <div>
                        
                      <input 
                            type="checkbox"
                            value="checkbox1"
                            id="checkbox"
                            
                            checked={checkboxes.includes('checkbox1')}
                            onChange={ () => handleCheckboxChange('checkbox1') }

                            onClick={openModal2}

                            style={{
                              width:"22px",
                              height:"22px",
                              accentColor:"#5f0080",
                            }}
                            
                      />
                      </div>
                    </label>
                  </div>

                  <div className="addressDetail">
                    <div
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    >
                    
                      경기 성남시 분당구 미금로 215 (청솔마을) 807-1704
                    </div>
                  </div>
                  <div className="addressName">
                    최현주
                  </div>
                  <div className="addressPhone">
                    010-6563-0571
                  </div>
                  
                  {/* 주소 삭제 이미지 */}
                  <div className="addressDel">
                    {/* <Link to='/update'> */}
                    <button 
                      id="XBtn"
                      onClick={openModal3}>
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          overflow: "hidden",
                        }}
                      >
                        <g
                          fill="none"
                          fillRule="evenodd">
                          <path
                            d="M0 0h24v24H0z"
                            fill="none" />
                          <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                            stroke="#ccc"
                            strokeWidth="1.5"/>
                        </g>
                      </svg>
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
              </li>

              <li className="AddressList-1">
                <div id="AddressList-1">

                  <div id="checkBtn">
                    <label htmlFor="checkbox">
                      <div>
                        
                      <input 
                            type="checkbox"
                            value="checkbox2"
                            id="checkbox"
                            
                            checked={checkboxes.includes('checkbox2')}
                            onChange={() => handleCheckboxChange('checkbox2')}
                            
                            onClick={openModal2}
                            
                            style={{
                              width:"22px",
                              height:"22px",
                              accentColor:"#5f0080",
                              //borderRadius:"",
                            }}
                      />
                      </div>
                    </label>
                  </div>

                  <div className="addressDetail">
                    <div
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    >
                      부산 금정구 부산대학로63번길 46-5 다인빌 101호
                    </div>
                  </div>
                  <div className="addressName">
                    최현주
                  </div>
                  <div className="addressPhone">
                    010-6563-0571
                  </div>

                  {/* 주소 삭제 이미지 */}
                  <div className="addressDel">

                    {/* 주소 삭제 이미지 */}
                    {/* <Link to='/update'> */}
                      <button 
                        id="XBtn"
                        onClick={openModal3}
                      >
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            overflow: "hidden",
                          }}
                        >
                          <g
                            fill="none"
                            fillRule="evenodd"
                          >
                            <path
                              d="M0 0h24v24H0z"
                              fill="none"
                            />
                            <path
                              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                              stroke="#ccc"
                              strokeWidth="1.5"
                            />
                          </g>
                        </svg>
                      </button>
                    {/* </Link> */}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
                  __html: `
                html {
                  padding: 0px;
                  margin: 0px;
                  box-sizing: border-box;
                  line-height: 1.15;
                  -webkit-tap-highlight-color: transparent;
                  touch-action: manipulation;
                  text-size-adjust: 100%;
                  height: 100%;
                  font-family: "Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif;
                }

                body {
                  padding: 0px;
                  box-sizing: border-box;
                  height: 100%;
                  margin: 0px;
                  user-select: none;
                  background-color: rgb(255, 255, 255);
                  -webkit-tap-highlight-color: transparent;
                  font-size: 14px;
                  color: rgb(51, 51, 51);
                }

                `,
            }}
        />
    </>
  );
}
