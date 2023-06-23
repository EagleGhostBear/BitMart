import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AddressForm from "../components/AddressForm";
import { cart_list } from "../components/CartItem";

import { actionCreators as cartActions } from "../redux/modules/cart";
import { CartItem } from "../components/component";
import axios from "axios";

const CartList = (props) => {
  const dispatch = useDispatch();
  const cart_list = useSelector((state) => state.cart.list);
  const token_key = `${localStorage.getItem("token")}`;
  const [data, setData] = useState([]);

  // let quantity_data = [];
  // let price_data = [];

  // for (let i = 0; i < cart_list.length; i++) {
  //   quantity_data.push(cart_list[i].quantity);
  // }
  // for (let i = 0; i < cart_list.length; i++) {
  //   price_data.push(cart_list[i].price);
  // }

  // let total_quantity = quantity_data.reduce((a, c) => a + c, 0);
  // let now_price = quantity_data.reduce(function (r, a, i) {
  //   return r + a * price_data[i];
  // }, 0);

  // let total_price = 0;
  // const delivery_fee = 3000;
  // if (now_price < 40000) {
  //   total_price = now_price + delivery_fee;
  // } else {
  //   total_price = now_price;
  // }

  let now_price = 0;
  let discount_price = 0;
  let total_quantity = 0;
  let delivery_price = 0;
  let total_price = now_price - discount_price;

  console.log("only 물품 가격: ", now_price);
  console.log("총 수량: ", total_quantity);
  console.log("총 가격: ", total_price);

  useEffect(() => {
    if (cart_list) {
      dispatch(cartActions.getCartDB());
    }
  }, []);

  useEffect(() => {
    console.log("token_key: ", token_key);
    axios
      .post("/cart_list", { seq: token_key })
      .then((response) => setData(response.data));

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
    const paymentdata = {
      pg: "html5_inicis",
      pay_method: "card",
      merchant_uid: String(new Date().getTime()),
      name: "Bit-Kurly 상품구매",
      amount: now_price - discount_price + delivery_price,
      custom_data: { name: "홍길동", tel: "010-1234-5678" },
      buyer_name: "홍길동",
      buyer_tel: "010-1234-5678",
      buyer_email: "hong@naver.com",
      buyer_addr: "서울특별시 강남구 삼성동",
      buyer_postcode: "123-456",
    };
    IMP.request_pay(paymentdata, callback);
    axios({
      method: "post",
      url: "/mycartList",
      data: {
        user: token_key,
      },
    }).then((res) => {
      console.log(res.data);
      const products = res.data.map((item) => item.product);
      const numbers = res.data.map((item) => item.number);
      console.log(products);
      axios({
        method: "post",
        url: "/Order_success",
        data: {
          user: token_key,
          products: products,
          numbers: numbers,
        },
      }).then((res) => {
        axios({
          method: "post",
          url: "/cart_allDelete",
          data: {
            user: token_key,
          },
        });
      });
    });
  };

  const callback = (response) => {
    const { success, error_msg } = response;
    if (success) {
      alert("결제 성공");
      console.log("결제 성공했는데 컨트롤러로 안감");
    } else {
      alert(`결제 실패: ${error_msg}`);
      console.log("결제 안되는데 컨트롤러로도 안감");
    }
  };

  return (
    <>
      {/* {is_loaded && ( */}
      <Container>
        <div className="title">
          <h2>장바구니</h2>
        </div>

        <InfoWrapper>
          <ProductWrapper>
            <ProductSummary>
              {/* <label className="check">
                <input
                  type="checkbox"
                  name="checkAll"
                  onClick={() => {
                    allSelect ? setAllSelect(false) : setAllSelect(true);
                    console.log(allSelect);
                  }}
                />
                <span className="ico" /> */}
              <div style={{ marginBottom: "10px" }}>
                전체선택 ({total_quantity}/{total_quantity})
              </div>
              {/* </label> */}
              {/* <a href="#none" className="select-delete">
                선택삭제
              </a> */}
            </ProductSummary>

            {/* {!cart_list && } */}

            {/* {cart_list &&
              cart_list.map((a, i) => {
                return <CartItem key={i} {...a} />;
              })} */}
            {data.map((item, i) => {
              now_price += item.price * item.number;
              discount_price += (item.sale / 100) * item.price * item.number;
              if (now_price - discount_price < 40000) {
                delivery_price = 3000;
              } else delivery_price = 0;
              return <CartItem key={i} {...item} />;
            })}
          </ProductWrapper>

          <PriceWrapper>
            {/* <DeliveryArea> */}

            <AddressForm />

            {/* </DeliveryArea> */}

            <PriceArea>
              <PriceDetail>
                <div className="area">
                  <p className="product-price">상품금액</p>
                  <p className="product-price-fee">
                    {now_price.toLocaleString("ko-KR")}원
                  </p>
                </div>
              </PriceDetail>
              <PriceDetail>
                <div className="discount-area">
                  <p className="discount">상품할인금액</p>
                  <p className="discount-price">
                    {discount_price.toLocaleString("ko-KR")}원
                  </p>
                </div>
              </PriceDetail>
              <PriceDetail>
                <div className="area">
                  <p className="delivery-fee">배송비</p>
                  <p className="delivery-fee-price">
                    {delivery_price.toLocaleString("ko-KR")}원
                  </p>
                </div>
              </PriceDetail>
              <p className="free">
                {now_price < 40000
                  ? `${(40000 - (now_price - discount_price)).toLocaleString(
                      "ko-KR"
                    )}원 추가주문 시 무료배송`
                  : ""}
              </p>
              <hr style={{ margin: "17px 0", border: "1px solid #eee" }} />
              <PriceDetail style={{ alignItems: "center" }}>
                <p style={{ float: "left" }}>결제예정금액</p>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    float: "right",
                  }}
                >
                  {(now_price - discount_price + delivery_price).toLocaleString(
                    "ko-KR"
                  )}
                  원
                </p>
              </PriceDetail>
              <Point>
                <span className="bage">적립</span>
                구매 시
                <span className="save">
                  {Math.ceil(total_price * 0.005)}원 적립
                </span>
                {/* {Total Price * 0.005}  */}
              </Point>
            </PriceArea>

            <ButtonArea>
              <button
                type="button" // type 속성을 "button"으로 설정
                onClick={onClickPayment}
                style={{
                  fontFamily: "Noto Sans",
                  backgroundColor: "#5f0080",
                  color: "white",
                  height: "56px",
                  borderRadius: "5px",
                  fontSize: "16px",
                  fontWeight: 600,
                  width: "100%",
                  border: "none",
                  cursor: "pointer",
                  lineHeight: "48px",
                }}
              >
                주문하기
              </button>
            </ButtonArea>

            <Notice>
              <span>
                <span className="ico">·</span>쿠폰/적립금은 주문서에서 사용
                가능합니다
              </span>
              <span>
                <span className="ico">·</span>[배송준비중] 이전까지 주문 취소
                가능합니다.
              </span>
              <span>
                <span className="ico">·</span>[마이컬리 &lt; 주문내역
                상세페이지] 에서 직접 취소할 수 있습니다.
              </span>
            </Notice>
          </PriceWrapper>
        </InfoWrapper>
      </Container>
    </>
  );
};

export default CartList;

const Container = styled.div`
  margin: 0 auto;
  .title {
    width: 1050px;
    padding: 50px 0 51px;
    margin: 0 auto;
    :after {
      content: "";
      position: absolute;
      z-index: 299;
      left: 0;
      top: 17%;

      width: 100%;
      height: 9px;
      background: url(https://res.kurly.com/pc/service/common/1902/bg_1x9.png)
        repeat-x 0 100%;
    }
    h2 {
      text-align: center;
      font-weight: 700;
      font-size: 28px;
      line-height: 35px;
      margin: 0;
    }
  }
`;

const InfoWrapper = styled.form`
  min-height: 562px;
  width: 1050px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 742px;
  padding: 10px;
  margin-right: 20px;
`;

const ProductSummary = styled.div`
  border-bottom: 1px solid #333;
  font-size: 14px;
  display: flex;
  align-items: center;
  .check {
    padding: 18px 0 17px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: -0.3px;
  }
  input[type="checkbox"] {
    position: absolute;
    z-index: -1;
    opacity: 0;
    + .ico {
      display: inline-block;
      position: relative;
      width: 24px;
      height: 24px;
      margin-right: 12px;
      border: 0;
      background-image: url(https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg);
      background-color: transparent;
      background-repeat: no-repeat;
      background-size: 24px 24px;
      background-position: 50% 50%;
      vertical-align: -7px;
    }
    :checked + .ico {
      background-image: url(https://res.kurly.com/mobile/service/common/2006/ico_checkbox_checked.svg);
      background-color: transparent;
      background-repeat: no-repeat;
      background-size: 24px 24px;
      background-position: 50% 50%;
    }
  }
  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
    margin-left: 20px;

    .select-delete {
      display: inline-block;
      padding: 18px 0 17px 20px;
      font-weight: 700;
      line-height: 25px;
    }
    :before {
      content: "";
      display: inline-block;
      width: 1px;
      height: 14px;
      margin: 6px 21px 0 0;
      background-color: #ddd;
    }
  }
`;

const PriceWrapper = styled.div`
  position: relative;
  top: 40px;
  display: flex;
  flex-direction: column;
  width: 284px;
  box-sizing: border-box;
`;

const DeliveryArea = styled.div`
  color: #4c4c4c;
  position: relative;
  z-index: 3;
  padding: 23px 19px 20px;
  border: 1px solid #f2f2f2;
  border-bottom: 0;
  letter-spacing: 0;
  .tit {
    padding-left: 24px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.3px;
    background-image: url(https://res.kurly.com/pc/service/cart/2007/ico_location.svg);
    /* background-color: transparent; */
    background-repeat: no-repeat;
    /* background-size: 20px 20px; */
    /* background-position: 0 50%; */
    width: 50px;
    margin: 0;
  }
  .address {
    display: flex;
    margin: 0;
    padding: 11px 0 0;
  }
  .addr {
    margin: 0;
    position: static;
    padding-left: 0;
    padding-right: 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
  .delivery-type {
  }
  .delivery-type-star {
    display: flex;
    padding: 8px 0 0;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.3px;
    color: #5f0080;
  }
`;

const PriceArea = styled.div`
  padding: 9px 18px 18px 20px;
  background-color: #fafafa;
  border: 1px solid #f2f2f2;
  .free {
    margin-top: 0px;
    padding-top: 9px;
    color: #5f0080;
    font-size: 12px;
    line-height: 18px;
    text-align: right;
  }
`;

const PriceDetail = styled.div`
  color: #4c4c4c;
  display: block;
  justify-content: space-between;
  .product-price {
    float: left;
  }
  .product-price-fee {
    float: right;
  }
  .discount {
    float: left;
    margin: 0;
  }
  .discount-price {
    float: right;
  }
  p {
    margin: 0;
  }
  .delivery-fee {
    float: left;
    padding-top: 9px;
    margin: 0;
    margin-right: 100px;
  }
  .delivery-fee-price {
    float: right;
    padding-top: 9px;
    margin: 0;
  }
  .area {
    height: 26.5px;
  }
  .discount-area {
    height: 36.5px;
    padding-top: 11px;
  }
`;

const Point = styled.div`
  padding-top: 36px;
  font-size: 12px;
  color: #666;
  line-height: 16px;
  text-align: right;
  margin: 0;
  .bage {
    height: 18px;
    margin-right: 4px;
    padding: 0 6px;
    font-weight: 700;
    line-height: 16px;
    vertical-align: 1px;
    display: inline-block;
    border: 1px solid #ffbf01;
    border-radius: 9px;
    background-color: #ffbf00;
    font-size: 10px;
    color: #fff;
  }
  .save {
    font-weight: 700;
    font-size: 12px;
    color: #666;
    line-height: 16px;
    text-align: right;
  }
`;

const ButtonArea = styled.div`
  /* position: static; */
  padding: 20px 0 0;
  width: 100%;
  /* background: 0 0; */
`;

const Notice = styled.div`
  padding-top: 34px;
  span {
    display: block;
    position: relative;
    padding: 6px 0 0 10px;
    font-size: 12px;
    color: #666;
    line-height: 18px;
    letter-spacing: -0.5px;
    .ico {
      position: absolute;
      left: 0;
      top: 6px;
      line-height: 18px;
      padding: 0;
    }
  }
`;
