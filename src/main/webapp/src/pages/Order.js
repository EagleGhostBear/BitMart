import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { actionCreators as orderActions } from '../redux/modules/order';

import './Order.css';

import { CartItem } from "../components/component";

const Order = () => {

  const dispatch = useDispatch();
  const order_list = useSelector((state) => state.cart.list);
  const token_key = `${localStorage.getItem("token")}`;
  const [data, setData] = useState([]);

  
  useEffect(() => {
    if (order_list) {
      dispatch(orderActions.orderListDB());
    }
  }, []);
  

  
  useEffect(() => {

    console.log("token key: ", token_key)
    axios.post('/order_list', {seq: token_key})
        .then(response => setData(response.data));
    
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.8.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);

    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    }
  }, []);


    return (
        <>
          <div className='MyPage'> 
            {/* 좌측 네비게이션 바 */}
    
            <div className="NavHeader">
              <div className="NavTitle">
                마이컬리
              </div>
              <ul className="NavMain">
                <li className="NavDetail">
                  <a href="/order" className="Order"
                      style={{
                        color:'#5f0080',
                      }}>
                    주문내역
                    
                    {/* svg, g태그 : 이미지 사용할때! => 화살표 태그 이미지 삽입 */}
                    <svg
                      id="Arrow"
                      height="19"
                      width="19"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
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
                            stroke="#5f0080"          // 화살표 색상
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
                
                
                <li className="NavDetail" >
                  <a href="/address" className="order.Address">
                    배송지 관리
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
    
                <li className="NavDetail" >
                  <a href="/ConfirmPwd" className="Info">
                    개인 정보 수정
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
              </ul>
            </div>

            {/* 주문내역 본문*/}
    
            <div className="OrderList">
              <div className="OrderTitle">
                <div
                  className="OrderTitleSubject"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                    //border: "2px solid blue"
                  }}
                >
                  <h2 className="OrderTitleSub1">
                    주문 내역
                  </h2>
                  <span className="OrderTitleSub2">
                    최대 지난 1년간의 주문 내역까지 확인할 수 있어요
                  </span>
                </div>
                {/*}
                <div className="SelectDateBox">
                  <div className="OrderTitleDate">
                    <div>
                      <div
                        className="MuiFormControl-root css-tzsjye">
                        <div
                          className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl jss1 css-eg1co4"
                        >
                */}

                          {/* select box 셀렉트 박스 */}
                          {/*
                          <select className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiMenu-paper MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-1g99zn8" tabIndex="-1" 
                          >
                                <option key="3month"value="3month">3개월</option>
                                <option key="6month" value="6month">6개월</option>
                                <option key="1year" value="1year">1년</option>
                            </select>

                          <input
                            className="MuiSelect-nativeInput css-1k3x8v3"
                            defaultValue="3"
                            aria-hidden="true"
                            tabIndex="-1"
                          
                          />
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined css-1636szt"
                            aria-hidden="true"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path d="M7 10l5 5 5-5z"/>
                          </svg>
                          <fieldset
                            className="MuiOutlinedInput-notchedOutline css-igs3ac"
                            aria-hidden="true"
                          >
                            <legend
                              className="css-nnbavb"
                              style={{
                                margin: "0px",
                                boxSizing: "border-box",
                                //border: "2px solid blue",
                                verticalAlign: "top",
                                padding: "0px",
                                transition:
                                  "width 150ms cubic-bezier(0, 0, 0.2, 1) 0ms",
                                cssFloat: "unset",
                                lineHeight: "11px",
                              }}
                            >
                              <span className="notranslate">
                                ​
                              </span>
                            </legend>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              */}
              </div>
    
              <div className="DivideLine"/>
    
              <div className="OrderDetail">
                {/* 동적 처리 */}
                {/*주문 내역 상품별로 데이터 바뀌는 곳(back-end)*/}
                <div className="OrderDetailContent">
                  <div className="OrderDetailSubject" >
                    <span className="OrderDetailDate">
                      2023.06.02 (17시 13분)
                    </span> 
                  </div>

                  <div className="OrderDetailItem" >
                    <div className="css-fhxb3m e1437c649">
                      <NavLink to={"../address"}>
                        <img
                          className="OrderItemImg"
                          alt="[아티제] 버터롤 상품 이미지"
                          src="https://img-cf.kurly.com/shop/data/goods/1653038714146l0.jpeg"  
                        />
                      </NavLink>
                      <div className="OrderItemDescript">
                        <dl className="ItemRow e1437c646">
                          <dt className="ItemCol1 e1437c645">
                            상품명
                          </dt>
                          <dd className="ItemCol2 e1437c643">
                            [아티제] 버터롤
                          </dd>
                        </dl>
                        <dl className="ItemRow e1437c646">
                          <dt className="ItemCol1 e1437c645">
                            주문번호
                          </dt>
                          <dd className="ItemCol2 e1437c644">
                            2307417130098
                          </dd>
                        </dl>

                        <dl className="ItemRow e1437c646">
                          <dt className="ItemCol1 e1437c645">
                            결제방법
                          </dt>
                          <dd className="ItemCol2 e1437c644">
                            신용카드
                          </dd>
                        </dl>
                        <dl className="ItemRow e1437c646">
                          <dt className="ItemCol1 e1437c645">
                            결제금액
                          </dt>
                          <dd className="ItemCol2 e1437c644">
                            2,500원
                          </dd>
                        </dl>
                      </div>
                    </div>

                    <div className="DeliveryBox e1437c642">
                      <span className="DeliveryState e1437c641">
                        배송완료
                      </span>
                      <div className="ReviewBtnDiv e1437c640">
                        <Link to='/review'>
                        <button
                          className="ReviewBtn e4nu7ef3"
                          type="button"
                          height="36"
                          radius="3"
                        >
                          <span className="WriteReview e4nu7ef1">
                            후기작성
                          </span>
                        </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div
                  className="css-bx0kqw e1mkosgq0"
                  style={{
                    width: "1px",
                    height: "1px",
                  }}
                />

              <div style={{border:'2px solid skyblue'}}>
                {data.map((item, i) => {
                  return (
                      <CartItem key={i} {...item} />
                  )
                })}
              </div>
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
};

export default Order;