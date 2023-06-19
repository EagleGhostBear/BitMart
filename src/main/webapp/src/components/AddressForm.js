import React, { useCallback } from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';


const width = 500;
const height = 400;

const AddressForm = () => {
  const onClickLink = useCallback(() => {
    /*global daum*/
    new daum.Postcode({
      oncomplete: function (data) {
        let left = Math.ceil((window.screen.width - width) / 2);
        let top = Math.ceil((window.screen.height - height) / 2);

        const addr = data.userSelectedType === 'R' ? data.roadAddress : data.jibunAddress;
        const buildingName = data.buildingName ? data.buildingName : '';

        sessionStorage.setItem('address', addr);
        sessionStorage.setItem('buildingName', buildingName);

        window.open(
          '/kakao/destination',
          '_blank',
          `height=${height},width=${width}, top=${top}, left=${left}`,
        );
      },
    }).open({
      left: Math.ceil((window.screen.width - width) / 2),
      top: Math.ceil((window.screen.height - height) / 2),
    });
  }, []);

  let addr = sessionStorage.getItem('address');
  let buildingName = sessionStorage.getItem('buildingName');

  return (
    <div className='rightContainer' style={rightContainerStyle}>
    <div className="AddressInfo" style={AddressInfoStyle}>
      <p>
        <FaMapMarkerAlt className="inline-block mr-3" />
        배송지
      </p>
      {addr === null && (
        <p>
          <span className="text-kp-600">배송지를 입력</span>하고
          <span className="block">배송유형을 확인해 보세요!</span>
        </p>
      )}
      {addr !== null && (
        <p className="pt-4 font-medium">
          <span>{`${addr} ${buildingName && '(' + buildingName + ')'}`}</span>
          <span className="block text-kp-600 text-r-1.4 pt-3">샛별배송</span>
        </p>
      )}

      <div className="delivery-type" style={deliveryStyle}>
        <span className="delivery-type-star" style={StartStyle}>샛별배송</span>
      </div>

    
        {addr === null ? (
          <>
            <button className="AddressButton" style={ AddressButton } onClick={onClickLink}>
              <span style={buttonSpanStyle}>주소 검색</span>
            </button>
          </>
        ) : (
          <span>배송지 변경</span>
        )}
      
    </div>
    </div>
  );
};

const rightContainerStyle = {
  position: "relative",
  width: "284px",
  paddingTop: "60px"
}

const addressStyle = {
  padding: "23px 19px 0px",
  borderwidth: "1px 1px 0px",
  bordertopstyle: "solid",
  borderrightstyle: "solid",
  borderleftstyle: "solid",
  bordertopcolor: "rgb(242, 242, 242)",
  borderrightcolor: "rgb(242, 242, 242)",
  borderleftcolor: "rgb(242, 242, 242)",
  borderimage: "initial",
  borderbottomstyle: "initial",
  borderbottomcolor: "initial"
}

const AddressInfoStyle = {
  padding: "23px 19px 20px",
  border: "1px solid #f2f2f2",
  borderBottom: 0,
}

const AddressButton = {
  display: "block",
  padding: "0px 10px",
  textAlign: "center",
  overflow: "hidden",
  width: "100%",
  height: "36px",
  borderRadius: "3px",
  color: "rgb(95, 0, 128)",
  backgroundColor: "rgb(255, 255, 255)",
  border: "1px solid rgb(95, 0, 128)",
};


const buttonSpanStyle = {
  fontsize: "12px",
  fontweight: 500,
}

const deliveryStyle = {
  padding: "7px 0px 12px",
  fontsize: "14px"
}

const StartStyle = {
  color: "rgb(95, 0, 128)",
  fontSize: "14px"
}

export default AddressForm;



