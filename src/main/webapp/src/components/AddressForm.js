import React, { useState, useEffect, useCallback } from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import axios from 'axios';
import { useDispatch } from "react-redux";

const width = 500;
const height = 400;

const AddressForm = () => {
  const [addr, setAddr] = useState(null);
  const [buildingName, setBuildingName] = useState(null);
  //const [addr, setAddr] = useState(sessionStorage.getItem('address'));
  //const [buildingName, setBuildingName] = useState(sessionStorage.getItem('buildingName'));

  const onClickLink = useCallback(() => {
    /*global daum*/
    new daum.Postcode({
      oncomplete: function (data) {
        const selectedAddr = data.userSelectedType === 'R' ? data.roadAddress : data.jibunAddress;
        const selectedBuildingName = data.buildingName ? data.buildingName : '';

        sessionStorage.setItem('address', selectedAddr);
        sessionStorage.setItem('buildingName', selectedBuildingName);

        setAddr(selectedAddr);
        setBuildingName(selectedBuildingName);

        console.log('빌딩 이름; ' , buildingName);
      },
    }).open({
      left: Math.ceil((window.screen.width - width) / 2),
      top: Math.ceil((window.screen.height - height) / 2),
    });
  }, []);

  // 기본 배송지 등록
  const dispatch = useDispatch();
  const token_key = `${localStorage.getItem("token")}`;
  const [data, setData] = useState([]);

  const [addr1, setAddr1] = useState('');

  //console.log('addr: ', addr )
  //console.log('data length: ', data.length );

  useEffect(() => {
    axios({
      method:'post',
      url:'cart_delivery',
      data:{
        user:token_key,
      },
    })
    .then((res) => {
      console.log('유저 배송지 주소: ', res.data);
      if(res.data != null) {
        setData(res.data);
        //console.log("1", res.data[0].addr1)
        setAddr1(res.data[0].addr1);
      }
      else setData('null');
    })
    .catch((e) => console.log('주소 가져오기 에러: ', e));
  }, []);

  console.log('addr: ', addr);
  console.log('data length: ', data.length);
  console.log('addr1: ', addr1);


    return (
    <div className="address-form-container">
      <p>
        <FaMapMarkerAlt className="marker-icon" />
        배송지
      </p>
      {(addr1 === '' && addr === null ) && (
        <div>
          <p>
            <span className="delivery-message">배송지를 등록하고</span>
          </p>
          <p>
            <span className="block-message" style={{marginBottom:'0px'}}>구매 가능한 상품을 확인하세요!</span>
          </p>
        </div>
      )}
      {((addr !== null &&  addr1 !=='') || (addr !== null && addr1 ==='') )&&(
        <p className="delivery-address">
          <span>{`${addr} ${buildingName && '(' + buildingName + ')'}`}</span>
          <span><input type='text' placeholder=" 상세주소를 입력해 주세요" style={{height:'33px', width:'200px', marginTop:'7px', marginBottom:'-15px'}}/></span>
          <span className="block-message"></span>
        </p>
      )}

      {addr1 !== '' && addr ===null &&(
        (data.map((item, index) => (
          <p className="delivery-address ">
            <span> {item?.addr1}&ensp;{item?.addr2}</span>
            <span className="block-message"></span>
          </p>
        )))
      )}

      <div className="delivery-type">
        <span className="delivery-type-star"></span>
      </div>

      <p
        onClick={onClickLink}
        className="address-search-button"
        style={{
          color: 'purple', // Changed color to purple
          backgroundColor: 'white',
          border: '1px solid rgb(95, 0, 128)',
          height: '36px',
          margin: '25px 0px 0px', // Increased margin top
          fontWeight: '800', // Bolder font
          fontSize: '13px', // Increased font size
          width: '100%',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          cursor:'pointer',
          marginTop:'0px',
        }}
      >
        {(addr1 === '' && addr === null) ? (
          <>
            <FaSearch className="search-icon" />
            주소 검색
          </>
        ) : (
          <span>배송지 변경</span>
        )}
      </p>
    </div>
  );
};

export default AddressForm;