import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ReviewWrite from "../components/ModalReview";
import styles from "../css/review.module.css";
import Tab from "../elements/Tab";
import axios from "axios";
//import ReviewData from "../components/ReviewData";

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

const Mypage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const token_key = `${localStorage.getItem("token")}`;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      // 스프링에서의 ajax느낌
      method: "post", // post방식으로 보내겠다
      url: "order_history", //스프링부트의 Controller의 order_history로 가라
      data: {
        user: token_key,
      },
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // 작성가능후기 & 작성한 후기 모달창 열기 버튼
  let [modalOpen1, setModalOpen1] = useState(true);
  let [modalOpen2, setModalOpen2] = useState(false);

  const handleButtonClick = () => {
    setModalOpen1(true);
    setModalOpen2(false);
  };

  const handleButtonClick2 = () => {
    setModalOpen1(false); // modalOpen1을 닫음
    setModalOpen2(true);
  };

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
          {/* <Tab text="작성가능후기" onClick={handleButtonClick} />
            {modalOpen1 ? "" : ""}
            <Modal
              isOpen={modalOpen1}
              content="작성할 후기가 없습니다."
            /> */}

          {/* <Tab text="작성한 후기" onClick={handleButtonClick2} />
            {modalOpen2 ? "" : ""}
            <Modal isOpen={modalOpen2} content={ReviewData.map((item)=> `${item.productName}: ${item.date}: ${item.content}`).join("\n")} />
            </div>
            </div> */}

          <Tab text="작성가능 후기" onClick={handleButtonClick} />

          <Tab text="작성한 후기" onClick={handleButtonClick2} />

          {modalOpen2 ? <Modal isOpen={modalOpen2} content="" /> : null}
        </div>
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
                    <a href="https://www.kurly.com/goods">
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
                      open={modalOpen}
                      close={closeModal}
                      header="후기"
                    ></ReviewWrite>
                  </React.Fragment>
                  <div className={styles.contentWrap}></div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
export default Mypage;
