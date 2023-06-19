import { useEffect } from "react";

const Payment = () => {
  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.8.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const onClickPayment = () => {
    const { IMP } = window;
    IMP.init("imp84451835");
    const data = {
      pg: "html5_inicis",
      pay_method: "card",
      merchant_uid: String(new Date().getTime()),
      name: '결제 테스트',
      amount: 1000,
      custom_data: { name: '홍길동', tel: '010-1234-5678' },
      buyer_name: '홍길동',
      buyer_tel: '010-1234-5678',
      buyer_email: 'dd1761@naver.com',
      buyer_addr: '서울특별시 강남구 삼성동',
      buyer_postcode: '123-456',
    };
    IMP.request_pay(data, callback);
  };

  const callback = (response) => {
    const { success, error_msg } = response;
    if (success) {
      alert("결제 성공");
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };

  return (
    <>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
};

export default Payment;
