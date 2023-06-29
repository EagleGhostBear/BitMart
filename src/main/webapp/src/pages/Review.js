import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ReviewWrite from "../components/ModalReview";

import styles from "../css/review.module.css";
import Tab from "../elements/Tab";
import axios from "axios";
import { useRef } from "react";

const Modal = ({ isOpen, content }) => {
  //탭 여닫는부분 스타일
  const modalStyle = {
    position: "absolute",
    top: "100%",
    padding: "10px",
    background: "white",
    display: isOpen ? "block" : "none",
  };

  return (
    <div style={modalStyle}>
      {isOpen && (
        <div>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Review = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const token_key = `${localStorage.getItem("token")}`;
  const [data, setData] = useState([]);
  const [select, setSelect] = useState(true);
  const selectProduct = useRef(0);

  useEffect(() => {
    axios
      .post("/order_history", {
        user: token_key,
        review: "n",
      })
      .then((response) => setData(response.data));
  }, []);

  const openModal = (seq) => {
    selectProduct.current = seq;
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // 작성가능후기 & 작성한 후기 모달창 열기 버튼
  let [modalOpen1, setModalOpen1] = useState(true);
  let [modalOpen2, setModalOpen2] = useState(false);

  const handleButtonClick = () => {
    setSelect(true);
    axios
      .post("/order_history", {
        user: token_key,
        review: "n",
      })
      .then((response) => setData(response.data));
  };

  const handleButtonClick2 = () => {
    setSelect(false);
    axios
      .post("/order_history", {
        user: token_key,
        review: "y",
      })
      .then((response) => {
      console.log("응답데이터 확인=  "+ response.data); // 응답 데이터 확인
      setData(response.data);
  });
};

useEffect(() => {
  console.log("상태 업데이트 확인 = " + data);
}, [data]);

  return (
    <div className={styles.containerWrap}>
      <div className={styles.container}>
        <div className={styles.mykurly}>마이컬리</div>

        {/* 메뉴바 시작 */}
        <ul className={styles["menu-ul"]}>
          <li className={styles["menu-ul-li"]}>
            <a className={styles["menu-a"]} href="/order">
              주문내역
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
                    d="M1.657 1.657L9.657 1.657 9.657 9.657" /* 화살표 이미지 경로 */
                  />
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g>
                    <g>
                      <g>
                        <g transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)">
                          <use
                            className={styles["menu-a svg use"]}
                            xlinkHref="#gfk9q0rhta"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </li>
          <li className={styles["menu-ul-li"]}>
            <a className={styles["menu-a"]} href="/address">
              배송지 관리
              <svg
                className={styles["menu-a-svg"]}
                height="19"
                width="19"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <g>
                    <g>
                      <g>
                        <g transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)">
                          <use
                            className={styles["menu-a svg use"]}
                            xlinkHref="#gfk9q0rhta"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </li>
          <li className={styles["menu-ul-li"]}>
            <a className={styles["menu-a"]} href="/review">
              상품후기
              <svg
                className={styles["menu-a-svg"]}
                height="19"
                width="19"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <g>
                    <g>
                      <g>
                        <g transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)">
                          <use
                            className={styles["menu-a svg use"]}
                            xlinkHref="#gfk9q0rhta"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </li>
          <li className={styles["menu-ul-li"]}>
            <a className={styles["menu-a"]} href="/ConfirmPwd">
              개인정보수정
              <svg
                className={styles["menu-a-svg"]}
                height="19"
                width="19"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <g>
                    <g>
                      <g>
                        <g transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)">
                          <use
                            className={styles["menu-a svg use"]}
                            xlinkHref="#gfk9q0rhta"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div className={styles["logoWrap"]}>
        <div className={styles["logoStyle"]}>
          <h2 className={styles["productLogo"]}>상품 후기</h2>
        </div>

        {/* 클릭하면 동작하는 모달창 */}

        <div className={styles["tabList"]}>
          <Tab
            text="작성가능 후기"
            onClick={handleButtonClick}
            style={{ color: select ? "purple" : "black" }}
          />

          <Tab
            text="작성한 후기"
            onClick={handleButtonClick2}
            style={{ color: select ? "black" : "purple" }}
          />
        </div>

        {data.map((item, index) => (
          <div className={styles.reviewContainer}>
            <div className={styles.reviewItem}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.productImage}
                  alt="상품이미지"
                  src={data[index].productImage}
                />
              </div>
              <div className={styles.productInfo}>
                <a href="">
                  <span className={styles.productName}>
                    {data[index].productTitle}
                  </span>
                </a>
                <div className={styles.dateWrap}>
                  <span className={styles.date}>{data[index].logTime}</span>
                </div>
              </div>
              <React.Fragment>
                <button
                  onClick={() => openModal(item.productSeq)}
                  className={styles.modalButton}
                >
                  후기 
                </button>
              </React.Fragment>
              <div className={styles.contentWrap}></div>
            </div>
          </div>
        ))}

        <ReviewWrite
          seq={selectProduct.current}
          //content={item}
          open={modalOpen}
          close={closeModal}
          header="후기"
        />

        {/* {modalOpen2 ? (
          <div className={styles.reviewContainer}>
            {data.map((item, index) => (
              <div className={styles.reviewItem} key={index}>
                <div className={styles.imageContainer}>
                  <img className={styles.productImage} alt="상품이미지" />
                </div>
                <div className={styles.productInfo}>
                  <a href="">
                    <span className={styles.productName}>상품명</span>
                  </a>
                  <div className={styles.dateWrap}>
                    <span className={styles.date}>날짜</span>
                  </div>
                  <div className="content">후기내용</div>
                </div>
                <React.Fragment>
                  <button
                    onClick={() => openModal(item)}
                    data={item}
                    className={styles.modalButton}
                  >
                    후기 수정
                  </button>
                  <ReviewWrite
                    content={item}
                    open={modalOpen}
                    close={closeModal}
                    header="후기"
                  ></ReviewWrite>
                </React.Fragment>
                <div className={styles.contentWrap}></div>
              </div>
            ))}
          </div>
        ) : null}

        {modalOpen1
          ? data.map((item, index) => (
              <div className={styles.reviewContainer}>
                <div className={styles.reviewItem}>
                  <div className={styles.imageContainer}>
                    <img
                      className={styles.productImage}
                      alt="상품이미지"
                      src={data[index].productImage}
                    />
                  </div>
                  <div className={styles.productInfo}>
                    <a href="">
                      <span className={styles.productName}>
                        {data[index].productTitle}
                      </span>
                    </a>
                    <div className={styles.dateWrap}>
                      <span className={styles.date}>{data[index].logTime}</span>
                    </div>
                  </div>
                  <React.Fragment>
                    <button
                      onClick={() => openModal(data)}
                      data={data}
                      className={styles.modalButton}
                    >
                      후기 작성
                    </button>

                    <ReviewWrite
                      product_seq={item.productSeq}
                      content={item}
                      open={modalOpen}
                      close={closeModal}
                      header="후기"
                    ></ReviewWrite>
                  </React.Fragment>
                  <div className={styles.contentWrap}></div>
                </div>
              </div>
            ))
          : null} */}
      </div>
    </div>
  );
};
export default Review;
