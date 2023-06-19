import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from "../components/ModalD";

export default function Component() {

  const navigate = useNavigate();

  const navigateToModify = () => {
    navigate('/modify');
  };


  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    // setModalOpen(prev => !prev);
    setModalOpen(true);
  };
  const closeModal = () => {
    // setModalOpen(prev => !prev);
    setModalOpen(false);
  };

  return (
    <>
      <div
        //className="body"
        className={`mainContainer ${modalOpen ? "darken" : ""}`}
        style={{
          boxSizing: "border-box",
          padding: "50px 0px 80px",
          margin: "0px auto",
          display: "flex",
          width: "1050px",
          flexDirection: "row",
          WebkitBoxPack: "justify",
          justifyContent: "space-between",
        }}
      >
        <div
          className="navbar"
          style={{
            padding: "0px",
            margin: "0px",
            boxSizing: "border-box",
            width: "200px",
          }}
        >
          <div
            className="pageTitle"
            style={{
              margin: "0px",
              boxSizing: "border-box",
              padding: "5px 0px 35px 1px",
              height: "75px",
              fontWeight: 500,
              fontSize: "28px",
              lineHeight: "35px",
              color: "rgb(51, 51, 51)",
              letterSpacing: "-1px",
            }}
          >
            마이컬리
          </div>
          <ul
            className="navMenu"
            style={{
              padding: "0px",
              margin: "0px",
              boxSizing: "border-box",
              listStyleType: "none",
              border: "1px solid rgb(242, 242, 242)",
            }}
          >
            <li
              style={{ padding: "0px", margin: "0px", boxSizing: "border-box" }}
            >
              <a href="./order"
                className="css-g4g0eu ecbxmj0"
                style={{
                  margin: "0px",
                  boxSizing: "border-box",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  borderBottom: "1px solid rgb(242, 242, 242)",
                  padding: "15px 13px 15px 20px",
                  cursor: "pointer",
                  display: "flex",
                  WebkitBoxPack: "justify",
                  justifyContent: "space-between",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  lineHeight: "19px",
                  letterSpacing: "-0.3px",
                  fontSize: "14px",
                  color: "rgb(102, 102, 102)",
                }}
              >
                주문내역
                <svg
                  height="19"
                  width="19"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    overflow: "hidden",
                  }}
                >
                  <defs
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <path
                      id="gfk9q0rhta"
                      d="M1.657 1.657L9.657 1.657 9.657 9.657"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    />
                  </defs>
                  <g
                    fill="none"
                    fillRule="evenodd"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <g
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <g
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                        }}
                      >
                        <g
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        >
                          <g
                            transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                            }}
                          >
                            <use
                              stroke="#999"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.8"
                              transform="rotate(45 5.657 5.657)"
                              xlinkHref="#gfk9q0rhta"
                              style={{
                                padding: "0px",
                                margin: "0px",
                                boxSizing: "border-box",
                              }}
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li
              style={{ padding: "0px", margin: "0px", boxSizing: "border-box" }}
            >
              <a href="./address"
                className="css-g4g0eu ecbxmj0"
                style={{
                  margin: "0px",
                  boxSizing: "border-box",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  borderBottom: "1px solid rgb(242, 242, 242)",
                  padding: "15px 13px 15px 20px",
                  cursor: "pointer",
                  display: "flex",
                  WebkitBoxPack: "justify",
                  justifyContent: "space-between",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  lineHeight: "19px",
                  letterSpacing: "-0.3px",
                  fontSize: "14px",
                  color: "rgb(102, 102, 102)",
                }}
              >
                배송지 관리
                <svg
                  height="19"
                  width="19"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    overflow: "hidden",
                  }}
                >
                  <defs
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <path
                      id="gfk9q0rhta"
                      d="M1.657 1.657L9.657 1.657 9.657 9.657"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    />
                  </defs>
                  <g
                    fill="none"
                    fillRule="evenodd"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <g
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <g
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                        }}
                      >
                        <g
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        >
                          <g
                            transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                            }}
                          >
                            <use
                              stroke="#999"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.8"
                              transform="rotate(45 5.657 5.657)"
                              xlinkHref="#gfk9q0rhta"
                              style={{
                                padding: "0px",
                                margin: "0px",
                                boxSizing: "border-box",
                              }}
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li
              style={{ padding: "0px", margin: "0px", boxSizing: "border-box" }}
            >
              <a
                className="css-g4g0eu ecbxmj0"
                style={{
                  margin: "0px",
                  boxSizing: "border-box",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  borderBottom: "1px solid rgb(242, 242, 242)",
                  padding: "15px 13px 15px 20px",
                  cursor: "pointer",
                  display: "flex",
                  WebkitBoxPack: "justify",
                  justifyContent: "space-between",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  lineHeight: "19px",
                  letterSpacing: "-0.3px",
                  fontSize: "14px",
                  color: "rgb(102, 102, 102)",
                }}
              >
                상품후기
                <svg
                  height="19"
                  width="19"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    overflow: "hidden",
                  }}
                >
                  <defs
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <path
                      id="gfk9q0rhta"
                      d="M1.657 1.657L9.657 1.657 9.657 9.657"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    />
                  </defs>
                  <g
                    fill="none"
                    fillRule="evenodd"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <g
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <g
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                        }}
                      >
                        <g
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        >
                          <g
                            transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                            }}
                          >
                            <use
                              stroke="#999"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.8"
                              transform="rotate(45 5.657 5.657)"
                              xlinkHref="#gfk9q0rhta"
                              style={{
                                padding: "0px",
                                margin: "0px",
                                boxSizing: "border-box",
                              }}
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li
              style={{ padding: "0px", margin: "0px", boxSizing: "border-box" }}
            >
              <a
                className="active css-g4g0eu ecbxmj0"
                style={{
                  margin: "0px",
                  boxSizing: "border-box",
                  textDecoration: "none",
                  borderBottom: "1px solid rgb(242, 242, 242)",
                  padding: "15px 13px 15px 20px",
                  cursor: "pointer",
                  display: "flex",
                  WebkitBoxPack: "justify",
                  justifyContent: "space-between",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  lineHeight: "19px",
                  letterSpacing: "-0.3px",
                  fontSize: "14px",
                  backgroundColor: "rgb(250, 250, 250)",
                  color: "rgb(95, 0, 128)",
                  fontWeight: 500,
                }}
              >
                개인 정보 수정
                <svg
                  height="19"
                  width="19"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    overflow: "hidden",
                  }}
                >
                  <defs
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <path
                      id="gfk9q0rhta"
                      d="M1.657 1.657L9.657 1.657 9.657 9.657"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    />
                  </defs>
                  <g
                    fill="none"
                    fillRule="evenodd"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <g
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <g
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                        }}
                      >
                        <g
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        >
                          <g
                            transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                            }}
                          >
                            <use
                              stroke="#5f0080"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.8"
                              transform="rotate(45 5.657 5.657)"
                              xlinkHref="#gfk9q0rhta"
                              style={{
                                padding: "0px",
                                margin: "0px",
                                boxSizing: "border-box",
                              }}
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
        <div
          className="section"
          //className={`mainContainer ${modalOpen ? "darken" : ""}`}
          style={{
            padding: "0px",
            margin: "0px",
            boxSizing: "border-box",
            width: "820px",
          }}
        >
          <div
            className="sectionTitleDiv"
            style={{
              padding: "0px",
              margin: "0px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              width: "100%",
              paddingBottom: "27px",
              WebkitBoxPack: "justify",
              justifyContent: "space-between",
            }}
          >
            <div
              className="pageSecondTitleSpan"
              style={{
                padding: "0px",
                margin: "0px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                WebkitBoxAlign: "center",
                alignItems: "center",
              }}
            >
              <h2
                className="pageSecondTitle"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  fontWeight: 500,
                  fontSize: "24px",
                  color: "rgb(51, 51, 51)",
                  letterSpacing: "-0.5px",
                  lineHeight: "48px",
                }}
              >
                개인 정보 수정
              </h2>
            </div>
          </div>
          <div
            className="sectionContentDiv"
            style={{
              padding: "0px",
              boxSizing: "border-box",
              margin: "0px auto",
              width: "820px",
            }}
          >
            <h4
              className="sectionSubTitle"
              style={{
                padding: "0px",
                margin: "0px",
                boxSizing: "border-box",
                paddingBottom: "8px",
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              비밀번호 재확인
            </h4>
            <p
              className="sectionSubTitleDescription"
              style={{
                padding: "0px",
                margin: "0px",
                boxSizing: "border-box",
                paddingBottom: "20px",
                fontSize: "12px",
                lineHeight: 1.5,
                color: "rgb(102, 102, 102)",
              }}
            >
              회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번
              확인해주세요.
            </p>
            <form
              action="#"
              style={{ padding: "0px", margin: "0px", boxSizing: "border-box" }}
            >
              <div
                className="loginForm"
                style={{
                  margin: "0px",
                  boxSizing: "border-box",
                  padding: "7px 60px 7px 120px",
                  borderTop: "2px solid rgb(51, 51, 51)",
                  borderBottom: "1px solid rgb(221, 221, 221)",
                }}
              >
                <div
                  className="idDiv"
                  style={{
                    margin: "0px",
                    boxSizing: "border-box",
                    padding: "10px 20px",
                    display: "inline-flex",
                    width: "100%",
                  }}
                >
                  <div
                    className="idTitle"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      width: "139px",
                      paddingTop: "12px",
                    }}
                  >
                    <label
                      className="css-1obgjqh e744wfw4"
                      htmlFor="userId"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        fontWeight: 500,
                        color: "rgb(51, 51, 51)",
                        lineHeight: "20px",
                      }}
                    >
                      아이디
                    </label>
                  </div>
                  <div
                    className="idInputBox"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      flex: "1 1 0%",
                    }}
                  >
                    <div
                      className="css-1waqr6j e1uzxhvi6"
                      style={{
                        margin: "0px",
                        boxSizing: "border-box",
                        padding: "0px",
                      }}
                    >
                      <div
                        className="css-176lya2 e1uzxhvi3"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          position: "relative",
                          height: "48px",
                        }}
                      >
                        <input
                          id="userId"
                          className="css-u52dqk e1uzxhvi2"
                          name="userId"
                          type="text"
                          defaultValue=""
                          style={{
                            font: "inherit",
                            margin: "0px",
                            WebkitTapHighlightColor: "transparent",
                            fontFamily:
                              '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                            padding: "0px 11px 1px 15px",
                            borderRadius: "4px",
                            border: "1px solid rgb(221, 221, 221)",
                            outline: "none",
                            width: "100%",
                            height: "46px",
                            fontWeight: 400,
                            lineHeight: 1.5,
                            color: "rgb(51, 51, 51)",
                            boxSizing: "border-box",
                            fontSize: "14px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="css-1w0ksfz e744wfw2"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      width: "120px",
                      marginLeft: "8px",
                    }}
                  />
                </div>
                <div
                  className="passwordDiv"
                  style={{
                    margin: "0px",
                    boxSizing: "border-box",
                    padding: "10px 20px",
                    display: "inline-flex",
                    width: "100%",
                  }}
                >
                  <div
                    className="passwordTitle"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      width: "139px",
                      paddingTop: "12px",
                    }}
                  >
                    <label
                      className="css-1obgjqh e744wfw4"
                      htmlFor="password"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        fontWeight: 500,
                        color: "rgb(51, 51, 51)",
                        lineHeight: "20px",
                      }}
                    >
                      비밀번호
                      <span
                        className="passwordRequired"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          color: "rgb(238, 106, 123)",
                        }}
                      >
                        *
                      </span>
                    </label>
                  </div>
                  <div
                    className="passwordInputBox"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      flex: "1 1 0%",
                    }}
                  >
                    <div
                      className="css-1waqr6j e1uzxhvi6"
                      style={{
                        margin: "0px",
                        boxSizing: "border-box",
                        padding: "0px",
                      }}
                    >
                      <div
                        className="css-176lya2 e1uzxhvi3"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          position: "relative",
                          height: "48px",
                        }}
                      >
                        <input
                          id="password"
                          className="css-u52dqk e1uzxhvi2"
                          name="password"
                          type="password"
                          // required="required"
                          autoComplete="off"
                          placeholder="현재 비밀번호를 입력해주세요"
                          style={{
                            font: "inherit",
                            margin: "0px",
                            WebkitTapHighlightColor: "transparent",
                            fontFamily:
                              '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                            padding: "0px 11px 1px 15px",
                            borderRadius: "4px",
                            border: "1px solid rgb(221, 221, 221)",
                            outline: "none",
                            width: "100%",
                            height: "46px",
                            fontWeight: 400,
                            lineHeight: 1.5,
                            color: "rgb(51, 51, 51)",
                            boxSizing: "border-box",
                            fontSize: "14px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="css-1w0ksfz e744wfw2"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      width: "120px",
                      marginLeft: "8px",
                    }}
                  />
                </div>
              </div>
              <div
                className="confirmBtnDiv"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  display: "flex",
                  WebkitBoxPack: "center",
                  justifyContent: "center",
                  marginTop: "40px",
                }}
              >
                {/* 클릭하면 모달창이 열리는 코드 */}
                
                <button
                  className="confirmBtn"
                  onClick={openModal}
                  // onClick={navigateToModify}
                  type="submit"
                  height="56"
                  width="240"
                  radius="3"
                  style={{
                    boxSizing: "border-box",
                    font: "inherit",
                    margin: "0px",
                    WebkitTapHighlightColor: "transparent",
                    textTransform: "none",
                    appearance: "button",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontFamily:
                      '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                    padding: "0px 10px",
                    overflow: "hidden",
                    borderRadius: "3px",
                    border: "0px none",
                    display: "block",
                    textAlign: "center",
                    width: "240px",
                    height: "56px",
                    color: "rgb(255, 255, 255)",
                    backgroundColor: "rgb(95, 0, 128)",
                  }}
                >
                  <span
                    className="confirmBtnText"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      display: "inline-block",
                      fontSize: "16px",
                      fontWeight: 500,
                    }}
                  >
                    확인
                  </span>
                </button>

                {modalOpen && 
                  (<Modal 
                      //modalOpen={modalOpen} 
                      open={openModal} 
                      close={closeModal} 
                      //onRequestClose={closeModal} 
                      //header="Modal heading"
                    ></Modal>
                  )}
                
              </div>
            </form>
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

.darken {
  background-color: rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
}

`,
        }}
      />
    </>
  );
}