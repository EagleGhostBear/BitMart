import React, { useEffect, useRef, useState } from "react";
import ProductList from "../components/ProductList";
import "./Category.css";
import axios from 'axios';

const Category = () => {
    const [data, setData] = useState([]);
    const [selectedTag, setSelectedTag] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [startNum, setStartNum] = useState(0);
    const [endNum, setEndNum] = useState(9);

    useEffect(() => {
      setSelectedTag('신상품순');
      axios.post('/list1', {
        tag: 'sale',
        category: '',
        word: '',
        startNum: startNum,
        endNum: endNum
      })
        .then(response => setData(response.data));

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      console.log(window.innerHeight + ", "+ window.pageYOffset + ", " + document.documentElement.clientHeight + ", " + document.documentElement.scrollTop);
      //if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight && document.documentElement.offsetHeight !== window.innerHeight)
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight)
      {console.log("끝까지 도달함");} //fetchData();}
    };

    // 데이터 가져오기
    const fetchData = async () => {
      setIsLoading(true);
      console.log(startNum + ", " + endNum);
      try {
        const response = await axios.post('/list2', { tag: 'sale', category: '', word: '', startNum: startNum, endNum: endNum}) // API_URL에 실제 API 엔드포인트를 입력합니다.
        setData(data => [...data, ...response.data]); // 기존 데이터와 새로운 데이터를 합쳐서 업데이트합니다.
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    const handleTagClick = (tag) => {
      setSelectedTag(tag);
    };

  return (
    <>
    <div id="container" className="css-1i60c0e e13nsthd2">
      <div className="css-pzlq5x e13nsthd1">
        <div className="css-1jgnig9 ev2ab494">
          <div className="css-11y1fso ev2ab493">
            <span className="css-wy76no ev2ab492">필터</span>
            <button
              className="css-7pv5zq ev2ab491"
              style={{
                font: "inherit",
                margin: "0px",
                WebkitTapHighlightColor: "transparent",
                overflow: "visible",
                border: "none",
                backgroundColor: "transparent",
                textTransform: "none",
                appearance: "button",
                cursor: "pointer",
                fontSize: "14px",
                color: "rgb(51, 51, 51)",
                borderRadius: "0px",
                fontFamily:
                  '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
              }}
            >
              <svg
                height="12"
                width="12"
                fill="none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <path
                  d="M13.78 3.96303C12.504 2.16973 10.4086 1 8.04 1C4.15192 1 1 4.15192 1 8.04C1 11.9281 4.15192 15.08 8.04 15.08C11.9281 15.08 15.08 11.9281 15.08 8.04"
                  stroke="#ddd"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                  }}
                />
                <path
                  d="M14.4933 1L14.4933 4.52H10.9733"
                  stroke="#ddd"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                  }}
                />
              </svg>
              <span
                className="css-w7g3fo ev2ab490"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  marginLeft: "5px",
                  fontWeight: 500,
                  color: "rgb(221, 221, 221)",
                }}
              >
                초기화
              </span>
            </button>
          </div>
          <div className="css-0 egeqx0g0">
            <div className="css-146937 e1frj59j10">
              <button
                className="css-16ixplb e1frj59j9"
                style={{
                  font: "inherit",
                  WebkitTapHighlightColor: "transparent",
                  border: "none",
                  backgroundColor: "transparent",
                  textTransform: "none",
                  appearance: "button",
                  cursor: "pointer",
                  fontSize: "14px",
                  color: "rgb(51, 51, 51)",
                  borderRadius: "0px",
                }}
              >
                <div
                  className="css-1iwixyn e1frj59j8"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    display: "flex",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                    fontWeight: 500,
                    fontSize: "15px",
                    lineHeight: "20px",
                    color: "rgb(51, 51, 51)",
                  }}
                >
                  카테고리
                </div>
                <svg
                  className="css-innaj4 e1frj59j6"
                  height="18"
                  width="18"
                  fill="none"
                  stroke="#999"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    transition: "transform 250ms ease-out 0s",
                    overflow: "hidden",
                    transform: "rotate(0deg)",
                  }}
                >
                  <path
                    d="M5 11L9 7L13 11"
                    stroke="#999"
                    strokeWidth="1.2"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  />
                </svg>
              </button>
              <nav
                className="css-1kscq9s e1frj59j5"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  transition: "all 250ms cubic-bezier(0.83, 0, 0.17, 1) 0s",
                  overflow: "hidden",
                  height: "auto",
                  maxHeight: "100vh",
                  opacity: 1,
                }}
              >
                <li className="css-x67gaa e1isxf3i1">
                  <a className="css-s5xdrg e1isxf3i0" href="https://www.kurly.com/collections/market-newproduct?page=1&filters=category%3A909">
                    <button
                      className="css-17kh8wb ee933650"
                      style={{
                        padding: "0px",
                        boxSizing: "border-box",
                        font: "inherit",
                        margin: "0px",
                        WebkitTapHighlightColor: "transparent",
                        overflow: "visible",
                        border: "none",
                        backgroundColor: "transparent",
                        textTransform: "none",
                        appearance: "button",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "rgb(51, 51, 51)",
                        borderRadius: "0px",
                        fontFamily:
                          '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                        display: "flex",
                        WebkitBoxAlign: "center",
                        alignItems: "center",
                        marginRight: "8px",
                      }}
                    >
                      <svg
                        height="18"
                        width="18"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          overflow: "hidden",
                        }}
                      >
                        <path
                          d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                          fill="none"
                          stroke="#ddd"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                        <path
                          d="M7 12.6667L10.3846 16L18 8.5"
                          stroke="#ddd"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                      </svg>
                    </button>
                    <span
                      className="css-1buhy1h ee933652"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        overflow: "hidden",
                        marginRight: "4px",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "rgb(51, 51, 51)",
                        display: "-webkit-box",
                        wordBreak: "break-all",
                        whiteSpace: "normal",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      수산·해산·건어물
                    </span>
                  </a>
                </li>
                <li
                  className="css-x67gaa e1isxf3i1"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    listStyle: "none",
                    marginBottom: "18px",
                  }}
                >
                  <a
                    className="css-s5xdrg e1isxf3i0"
                    href="https://www.kurly.com/collections/market-newproduct?page=1&filters=category%3A912"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "inherit",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      className="css-17kh8wb ee933650"
                      style={{
                        padding: "0px",
                        boxSizing: "border-box",
                        font: "inherit",
                        margin: "0px",
                        WebkitTapHighlightColor: "transparent",
                        overflow: "visible",
                        border: "none",
                        backgroundColor: "transparent",
                        textTransform: "none",
                        appearance: "button",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "rgb(51, 51, 51)",
                        borderRadius: "0px",
                        fontFamily:
                          '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                        display: "flex",
                        WebkitBoxAlign: "center",
                        alignItems: "center",
                        marginRight: "8px",
                      }}
                    >
                      <svg
                        height="18"
                        width="18"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          overflow: "hidden",
                        }}
                      >
                        <path
                          d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                          fill="none"
                          stroke="#ddd"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                        <path
                          d="M7 12.6667L10.3846 16L18 8.5"
                          stroke="#ddd"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                      </svg>
                    </button>
                    <span
                      className="css-1buhy1h ee933652"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        overflow: "hidden",
                        marginRight: "4px",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "rgb(51, 51, 51)",
                        display: "-webkit-box",
                        wordBreak: "break-all",
                        whiteSpace: "normal",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      샐러드·간편식
                    </span>
                  </a>
                </li>
                <li
                  className="css-x67gaa e1isxf3i1"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    listStyle: "none",
                    marginBottom: "18px",
                  }}
                >
                  <a
                    className="css-s5xdrg e1isxf3i0"
                    href="https://www.kurly.com/collections/market-newproduct?page=1&filters=category%3A911"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "inherit",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      className="css-17kh8wb ee933650"
                      style={{
                        padding: "0px",
                        boxSizing: "border-box",
                        font: "inherit",
                        margin: "0px",
                        WebkitTapHighlightColor: "transparent",
                        overflow: "visible",
                        border: "none",
                        backgroundColor: "transparent",
                        textTransform: "none",
                        appearance: "button",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "rgb(51, 51, 51)",
                        borderRadius: "0px",
                        fontFamily:
                          '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                        display: "flex",
                        WebkitBoxAlign: "center",
                        alignItems: "center",
                        marginRight: "8px",
                      }}
                    >
                      <svg
                        height="18"
                        width="18"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          overflow: "hidden",
                        }}
                      >
                        <path
                          d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                          fill="none"
                          stroke="#ddd"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                        <path
                          d="M7 12.6667L10.3846 16L18 8.5"
                          stroke="#ddd"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                      </svg>
                    </button>
                    <span
                      className="css-1buhy1h ee933652"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        overflow: "hidden",
                        marginRight: "4px",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "rgb(51, 51, 51)",
                        display: "-webkit-box",
                        wordBreak: "break-all",
                        whiteSpace: "normal",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      국·반찬·메인요리
                    </span>
                  </a>
                </li>
                <li
                  className="css-x67gaa e1isxf3i1"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    listStyle: "none",
                    marginBottom: "18px",
                  }}
                >
                  <a
                    className="css-s5xdrg e1isxf3i0"
                    href="https://www.kurly.com/collections/market-newproduct?page=1&filters=category%3A908"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "inherit",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      className="css-17kh8wb ee933650"
                      style={{
                        padding: "0px",
                        boxSizing: "border-box",
                        font: "inherit",
                        margin: "0px",
                        WebkitTapHighlightColor: "transparent",
                        overflow: "visible",
                        border: "none",
                        backgroundColor: "transparent",
                        textTransform: "none",
                        appearance: "button",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "rgb(51, 51, 51)",
                        borderRadius: "0px",
                        fontFamily:
                          '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                        display: "flex",
                        WebkitBoxAlign: "center",
                        alignItems: "center",
                        marginRight: "8px",
                      }}
                    >
                      <svg
                        height="18"
                        width="18"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          overflow: "hidden",
                        }}
                      >
                        <path
                          d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                          fill="none"
                          stroke="#ddd"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                        <path
                          d="M7 12.6667L10.3846 16L18 8.5"
                          stroke="#ddd"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                      </svg>
                    </button>
                    <span
                      className="css-1buhy1h ee933652"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        overflow: "hidden",
                        marginRight: "4px",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "rgb(51, 51, 51)",
                        display: "-webkit-box",
                        wordBreak: "break-all",
                        whiteSpace: "normal",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      과일·견과·쌀
                    </span>
                  </a>
                </li>
                <li
                  className="css-x67gaa e1isxf3i1"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    listStyle: "none",
                    marginBottom: "18px",
                  }}
                >
                  <a
                    className="css-s5xdrg e1isxf3i0"
                    href="https://www.kurly.com/collections/market-newproduct?page=1&filters=category%3A012"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "inherit",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      className="css-17kh8wb ee933650"
                      style={{
                        padding: "0px",
                        boxSizing: "border-box",
                        font: "inherit",
                        margin: "0px",
                        WebkitTapHighlightColor: "transparent",
                        overflow: "visible",
                        border: "none",
                        backgroundColor: "transparent",
                        textTransform: "none",
                        appearance: "button",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "rgb(51, 51, 51)",
                        borderRadius: "0px",
                        fontFamily:
                          '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                        display: "flex",
                        WebkitBoxAlign: "center",
                        alignItems: "center",
                        marginRight: "8px",
                      }}
                    >
                      <svg
                        height="18"
                        width="18"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          overflow: "hidden",
                        }}
                      >
                        <path
                          d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                          fill="none"
                          stroke="#ddd"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                        <path
                          d="M7 12.6667L10.3846 16L18 8.5"
                          stroke="#ddd"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                      </svg>
                    </button>
                    <span
                      className="css-1buhy1h ee933652"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        overflow: "hidden",
                        marginRight: "4px",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "rgb(51, 51, 51)",
                        display: "-webkit-box",
                        wordBreak: "break-all",
                        whiteSpace: "normal",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      헤어·바디·구강
                    </span>
                  </a>
                </li>
                <li
                  className="css-x67gaa e1isxf3i1"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    listStyle: "none",
                    marginBottom: "18px",
                  }}
                >
                  <a
                    className="css-s5xdrg e1isxf3i0"
                    href="https://www.kurly.com/collections/market-newproduct?page=1&filters=category%3A913"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "inherit",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      className="css-17kh8wb ee933650"
                      style={{
                        padding: "0px",
                        boxSizing: "border-box",
                        font: "inherit",
                        margin: "0px",
                        WebkitTapHighlightColor: "transparent",
                        overflow: "visible",
                        border: "none",
                        backgroundColor: "transparent",
                        textTransform: "none",
                        appearance: "button",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "rgb(51, 51, 51)",
                        borderRadius: "0px",
                        fontFamily:
                          '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                        display: "flex",
                        WebkitBoxAlign: "center",
                        alignItems: "center",
                        marginRight: "8px",
                      }}
                    >
                      <svg
                        height="18"
                        width="18"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          overflow: "hidden",
                        }}
                      >
                        <path
                          d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                          fill="none"
                          stroke="#ddd"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                        <path
                          d="M7 12.6667L10.3846 16L18 8.5"
                          stroke="#ddd"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                      </svg>
                    </button>
                    <span
                      className="css-1buhy1h ee933652"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        overflow: "hidden",
                        marginRight: "4px",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "rgb(51, 51, 51)",
                        display: "-webkit-box",
                        wordBreak: "break-all",
                        whiteSpace: "normal",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      면·양념·오일
                    </span>
                  </a>
                </li>
                <li
                  className="css-x67gaa e1isxf3i1"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    listStyle: "none",
                    marginBottom: "18px",
                  }}
                >
                  <a
                    className="css-s5xdrg e1isxf3i0"
                    href="https://www.kurly.com/collections/market-newproduct?page=1&filters=category%3A907"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "inherit",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      className="css-17kh8wb ee933650"
                      style={{
                        padding: "0px",
                        boxSizing: "border-box",
                        font: "inherit",
                        margin: "0px",
                        WebkitTapHighlightColor: "transparent",
                        overflow: "visible",
                        border: "none",
                        backgroundColor: "transparent",
                        textTransform: "none",
                        appearance: "button",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "rgb(51, 51, 51)",
                        borderRadius: "0px",
                        fontFamily:
                          '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                        display: "flex",
                        WebkitBoxAlign: "center",
                        alignItems: "center",
                        marginRight: "8px",
                      }}
                    >
                      <svg
                        height="18"
                        width="18"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          overflow: "hidden",
                        }}
                      >
                        <path
                          d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                          fill="none"
                          stroke="#ddd"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                        <path
                          d="M7 12.6667L10.3846 16L18 8.5"
                          stroke="#ddd"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                      </svg>
                    </button>
                    <span
                      className="css-1buhy1h ee933652"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        overflow: "hidden",
                        marginRight: "4px",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "rgb(51, 51, 51)",
                        display: "-webkit-box",
                        wordBreak: "break-all",
                        whiteSpace: "normal",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      채소
                    </span>
                  </a>
                </li>
                <li
                  className="css-x67gaa e1isxf3i1"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    listStyle: "none",
                    marginBottom: "18px",
                  }}
                >
                  <a
                    className="css-s5xdrg e1isxf3i0"
                    href="https://www.kurly.com/collections/market-newproduct?page=1&filters=category%3A916"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "inherit",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      className="css-17kh8wb ee933650"
                      style={{
                        padding: "0px",
                        boxSizing: "border-box",
                        font: "inherit",
                        margin: "0px",
                        WebkitTapHighlightColor: "transparent",
                        overflow: "visible",
                        border: "none",
                        backgroundColor: "transparent",
                        textTransform: "none",
                        appearance: "button",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "rgb(51, 51, 51)",
                        borderRadius: "0px",
                        fontFamily:
                          '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                        display: "flex",
                        WebkitBoxAlign: "center",
                        alignItems: "center",
                        marginRight: "8px",
                      }}
                    >
                      <svg
                        height="18"
                        width="18"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          overflow: "hidden",
                        }}
                      >
                        <path
                          d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                          fill="none"
                          stroke="#ddd"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                        <path
                          d="M7 12.6667L10.3846 16L18 8.5"
                          stroke="#ddd"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                      </svg>
                    </button>
                    <span
                      className="css-1buhy1h ee933652"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        overflow: "hidden",
                        marginRight: "4px",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "rgb(51, 51, 51)",
                        display: "-webkit-box",
                        wordBreak: "break-all",
                        whiteSpace: "normal",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      주방용품
                    </span>
                  </a>
                </li>
                <li
                  className="css-x67gaa e1isxf3i1"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    listStyle: "none",
                    marginBottom: "18px",
                  }}
                >
                  <a
                    className="css-s5xdrg e1isxf3i0"
                    href="https://www.kurly.com/collections/market-newproduct?page=1&filters=category%3A249"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "inherit",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      className="css-17kh8wb ee933650"
                      style={{
                        padding: "0px",
                        boxSizing: "border-box",
                        font: "inherit",
                        margin: "0px",
                        WebkitTapHighlightColor: "transparent",
                        overflow: "visible",
                        border: "none",
                        backgroundColor: "transparent",
                        textTransform: "none",
                        appearance: "button",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "rgb(51, 51, 51)",
                        borderRadius: "0px",
                        fontFamily:
                          '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                        display: "flex",
                        WebkitBoxAlign: "center",
                        alignItems: "center",
                        marginRight: "8px",
                      }}
                    >
                      <svg
                        height="18"
                        width="18"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          overflow: "hidden",
                        }}
                      >
                        <path
                          d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                          fill="none"
                          stroke="#ddd"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                        <path
                          d="M7 12.6667L10.3846 16L18 8.5"
                          stroke="#ddd"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                      </svg>
                    </button>
                    <span
                      className="css-1buhy1h ee933652"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        overflow: "hidden",
                        marginRight: "4px",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "rgb(51, 51, 51)",
                        display: "-webkit-box",
                        wordBreak: "break-all",
                        whiteSpace: "normal",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      간식·과자·떡
                    </span>
                  </a>
                </li>
                <li
                  className="css-x67gaa e1isxf3i1"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    listStyle: "none",
                    marginBottom: "21px",
                  }}
                >
                  <a
                    className="css-s5xdrg e1isxf3i0"
                    href="https://www.kurly.com/collections/market-newproduct?page=1&filters=category%3A032"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "inherit",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      className="css-17kh8wb ee933650"
                      style={{
                        padding: "0px",
                        boxSizing: "border-box",
                        font: "inherit",
                        margin: "0px",
                        WebkitTapHighlightColor: "transparent",
                        overflow: "visible",
                        border: "none",
                        backgroundColor: "transparent",
                        textTransform: "none",
                        appearance: "button",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "rgb(51, 51, 51)",
                        borderRadius: "0px",
                        fontFamily:
                          '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                        display: "flex",
                        WebkitBoxAlign: "center",
                        alignItems: "center",
                        marginRight: "8px",
                      }}
                    >
                      <svg
                        height="18"
                        width="18"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          overflow: "hidden",
                        }}
                      >
                        <path
                          d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                          fill="none"
                          stroke="#ddd"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                        <path
                          d="M7 12.6667L10.3846 16L18 8.5"
                          stroke="#ddd"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                      </svg>
                    </button>
                    <span
                      className="css-1buhy1h ee933652"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        overflow: "hidden",
                        marginRight: "4px",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "rgb(51, 51, 51)",
                        display: "-webkit-box",
                        wordBreak: "break-all",
                        whiteSpace: "normal",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      건강식품
                    </span>
                  </a>
                </li>
                <button
                  className="css-ypdml9 e1frj59j1"
                  style={{
                    padding: "0px",
                    boxSizing: "border-box",
                    font: "inherit",
                    margin: "0px",
                    WebkitTapHighlightColor: "transparent",
                    overflow: "visible",
                    border: "none",
                    backgroundColor: "transparent",
                    textTransform: "none",
                    appearance: "button",
                    cursor: "pointer",
                    borderRadius: "0px",
                    fontFamily:
                      '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                    width: "100%",
                    height: "30px",
                    display: "flex",
                    WebkitBoxPack: "center",
                    justifyContent: "center",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                    color: "rgb(153, 153, 153)",
                    fontWeight: 500,
                    fontSize: "12px",
                    marginBottom: "11px",
                  }}
                >
                  카테고리 더보기{" "}
                  <svg
                    className="css-jbgpyq e1frj59j0"
                    height="18"
                    width="18"
                    fill="none"
                    stroke="#999"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      transform: "rotate(90deg)",
                      overflow: "hidden",
                    }}
                  >
                    <path
                      d="M5 11L9 7L13 11"
                      stroke="#999"
                      strokeWidth="1.2"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    />
                  </svg>
                </button>
              </nav>
            </div>
            <div
              className="css-146937 e1frj59j10"
              style={{
                padding: "0px",
                margin: "0px",
                boxSizing: "border-box",
                borderBottom: "1px solid rgb(238, 238, 238)",
              }}
            >
              <button
                className="css-16ixplb e1frj59j9"
                style={{
                  padding: "0px",
                  boxSizing: "border-box",
                  font: "inherit",
                  margin: "0px",
                  WebkitTapHighlightColor: "transparent",
                  border: "none",
                  backgroundColor: "transparent",
                  textTransform: "none",
                  appearance: "button",
                  cursor: "pointer",
                  fontSize: "14px",
                  color: "rgb(51, 51, 51)",
                  borderRadius: "0px",
                  fontFamily:
                    '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                  overflow: "hidden",
                  display: "flex",
                  WebkitBoxPack: "justify",
                  justifyContent: "space-between",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "52px",
                }}
              >
                <div
                  className="css-1iwixyn e1frj59j8"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    display: "flex",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                    fontWeight: 500,
                    fontSize: "15px",
                    lineHeight: "20px",
                    color: "rgb(51, 51, 51)",
                  }}
                >
                  혜택
                </div>
                <svg
                  className="css-innaj4 e1frj59j6"
                  height="18"
                  width="18"
                  fill="none"
                  stroke="#999"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    transition: "transform 250ms ease-out 0s",
                    overflow: "hidden",
                    transform: "rotate(0deg)",
                  }}
                >
                  <path
                    d="M5 11L9 7L13 11"
                    stroke="#999"
                    strokeWidth="1.2"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  />
                </svg>
              </button>
              <nav
                className="css-1kscq9s e1frj59j5"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  transition: "all 250ms cubic-bezier(0.83, 0, 0.17, 1) 0s",
                  overflow: "hidden",
                  height: "auto",
                  maxHeight: "100vh",
                  opacity: 1,
                }}
              >
                <li
                  className="css-x67gaa e1isxf3i1"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    listStyle: "none",
                    display: "inline-block",
                    marginTop: "9px",
                    marginBottom: "21px",
                  }}
                >
                  <a
                    className="css-s5xdrg e1isxf3i0"
                    href="https://www.kurly.com/collections/market-newproduct?page=1&filters=benefit%3Adiscount"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "inherit",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      className="css-17kh8wb ee933650"
                      style={{
                        padding: "0px",
                        boxSizing: "border-box",
                        font: "inherit",
                        margin: "0px",
                        WebkitTapHighlightColor: "transparent",
                        overflow: "visible",
                        border: "none",
                        backgroundColor: "transparent",
                        textTransform: "none",
                        appearance: "button",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "rgb(51, 51, 51)",
                        borderRadius: "0px",
                        fontFamily:
                          '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                        display: "flex",
                        WebkitBoxAlign: "center",
                        alignItems: "center",
                        marginRight: "8px",
                      }}
                    >
                      <svg
                        height="18"
                        width="18"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          overflow: "hidden",
                        }}
                      >
                        <path
                          d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                          fill="none"
                          stroke="#ddd"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                        <path
                          d="M7 12.6667L10.3846 16L18 8.5"
                          stroke="#ddd"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        />
                      </svg>
                    </button>
                    <span
                      className="css-1buhy1h ee933652"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        overflow: "hidden",
                        marginRight: "4px",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "rgb(51, 51, 51)",
                        display: "-webkit-box",
                        wordBreak: "break-all",
                        whiteSpace: "normal",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      할인상품
                    </span>
                    <span
                      className="css-ryw54y ee933651"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        flexShrink: 0,
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "16px",
                        color: "rgb(204, 204, 204)",
                      }}
                    >
                      98
                    </span>
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div
          className="css-1d3w5wq ef36txc6"
          style={{
            padding: "0px",
            margin: "0px",
            boxSizing: "border-box",
            width: "100%",
          }}
        >
          <div
            className="css-1stur9s eudxpx34"
            style={{
              padding: "0px",
              margin: "0px",
              boxSizing: "border-box",
              display: "flex",
              WebkitBoxAlign: "center",
              alignItems: "center",
              WebkitBoxPack: "justify",
              justifyContent: "space-between",
              paddingBottom: "20px",
              lineHeight: "20px",
            }}
          >
            <div
              className="css-crqql1 eudxpx33"
              style={{
                padding: "0px",
                margin: "0px",
                boxSizing: "border-box",
                fontSize: "14px",
                fontWeight: 500,
                color: "rgb(51, 51, 51)",
              }}
            >
              총 205건
            </div>
            <ul
              className="css-1vmfy7j eudxpx32"
              style={{
                listStyleType: "none",
                position: "relative",
                display: "flex",
                WebkitBoxAlign: "center",
                alignItems: "center",
              }}
            >
              <li
                className="css-5uzvtq eudxpx31"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  display: "flex",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  WebkitBoxPack: "end",
                  justifyContent: "flex-end",
                  marginLeft: "8px",
                  fontSize: "14px",
                  color: "rgb(153, 153, 153)",
                }}
              >
                <a
                  className="css-126imjl eudxpx30"
                  href="#"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    letterSpacing: "-0.3px",
                    fontWeight: 500,
                    color: selectedTag === '신상품순' ? "rgb(51, 51, 51)" : "inherit",
                    cursor: "default",
                  }}
                  onClick={() => handleTagClick('신상품순')}
                >
                  신상품순
                </a>
              </li>
              <li
                className="css-5uzvtq eudxpx31"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  display: "flex",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  WebkitBoxPack: "end",
                  justifyContent: "flex-end",
                  marginLeft: "8px",
                  fontSize: "14px",
                  color: "rgb(153, 153, 153)",
                }}
              >
                <a
                  className="css-19ce13b eudxpx30"
                  href="#"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    color: selectedTag === '판매량순' ? "rgb(51, 51, 51)" : "inherit",
                    letterSpacing: "-0.3px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleTagClick('판매량순')}
                >
                  판매량순
                </a>
              </li>
              <li
                className="css-5uzvtq eudxpx31"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  display: "flex",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  WebkitBoxPack: "end",
                  justifyContent: "flex-end",
                  marginLeft: "8px",
                  fontSize: "14px",
                  color: "rgb(153, 153, 153)",
                }}
              >
                <a
                  className="css-19ce13b eudxpx30"
                  href="#"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    color: selectedTag === '혜택순' ? "rgb(51, 51, 51)" : "inherit",
                    letterSpacing: "-0.3px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleTagClick('혜택순')}
                >
                  혜택순
                </a>
              </li>
              <li
                className="css-5uzvtq eudxpx31"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  display: "flex",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  WebkitBoxPack: "end",
                  justifyContent: "flex-end",
                  marginLeft: "8px",
                  fontSize: "14px",
                  color: "rgb(153, 153, 153)",
                }}
              >
                <a
                  className="css-19ce13b eudxpx30"
                  href="#"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    color: selectedTag === '낮은 가격순' ? "rgb(51, 51, 51)" : "inherit",
                    letterSpacing: "-0.3px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleTagClick('낮은 가격순')}
                >
                  낮은 가격순
                </a>
              </li>
            </ul>
          </div>
            <div className="css-11kh0cw ef36txc5">
            {data.map((item, i) => {
              return (
                <ProductList key={i} data={item}></ProductList>
              );
            })}
            {/* {data.map(item => (
                <a className="css-1xyd46f e1c07x4814" href="https://www.kurly.com/goods/1000197425">
                    <div className="css-0 e1c07x4812">
                        <div className="e1c07x4813 css-1kth2sq e3um3060">
                            <span>
                                <img className="css-0" alt="상품 이미지" sizes="100vw" src={item.image}
                                srcSet={`${item.image} 640w, ${item.image} 750w, ${item.image} 828w, ${item.image} 1080w, ${item.image} 1200w, ${item.image} 1920w, ${item.image} 2048w, ${item.image} 3840w`}/>
                                <noscript/>
                            </span>
                        </div>
                    </div>
                    <div className="css-c1cgl e1c07x489">
                        <span className="css-1qd61ut e1ms5t9c1">
                            <span className="css-1vdqr5b e1ms5t9c0">샛별배송</span>
                        </span>
                        <span className="css-1dry2r1 e1c07x488">{item.title}</span>
                        <p className="css-1wejlc3 e1c07x486">{item.subtitle}</p>
                        <div className="e1c07x487 css-1t4zbyd ei5rudb2">
                            <div>
                                <span className="discount-rate css-19lkxd2 ei5rudb0">{item.sale}%</span>
                                <span className="sales-price css-18tpqqq ei5rudb1">
                                    {(1 - item.sale/100)*item.price}
                                    <span className="won">원</span>
                                </span>
                            </div>
                            <div>
                                <span className="dimmed-price css-18tpqqq ei5rudb1">
                                    {item.price}
                                    <span className="won">원</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
            ))} */}
                {/* <a className="css-1xyd46f e1c07x4814" href="https://www.kurly.com/goods/1000197425">
                    <div className="css-0 e1c07x4812">
                        <div className="e1c07x4813 css-1kth2sq e3um3060">
                            <span>
                                <img className="css-0" alt="상품 이미지" sizes="100vw"
                                src="https://product-image.kurly.com/cdn-cgi/image/quality=85,width=676/product/image/0f6891ef-9086-430a-b315-ebfe872ab76b.jpg"
                                srcSet="https://product-image.kurly.com/cdn-cgi/image/quality=85,width=676/product/image/0f6891ef-9086-430a-b315-ebfe872ab76b.jpg 640w, https://product-image.kurly.com/cdn-cgi/image/quality=85,width=676/product/image/0f6891ef-9086-430a-b315-ebfe872ab76b.jpg 750w, https://product-image.kurly.com/cdn-cgi/image/quality=85,width=676/product/image/0f6891ef-9086-430a-b315-ebfe872ab76b.jpg 828w, https://product-image.kurly.com/cdn-cgi/image/quality=85,width=676/product/image/0f6891ef-9086-430a-b315-ebfe872ab76b.jpg 1080w, https://product-image.kurly.com/cdn-cgi/image/quality=85,width=676/product/image/0f6891ef-9086-430a-b315-ebfe872ab76b.jpg 1200w, https://product-image.kurly.com/cdn-cgi/image/quality=85,width=676/product/image/0f6891ef-9086-430a-b315-ebfe872ab76b.jpg 1920w, https://product-image.kurly.com/cdn-cgi/image/quality=85,width=676/product/image/0f6891ef-9086-430a-b315-ebfe872ab76b.jpg 2048w, https://product-image.kurly.com/cdn-cgi/image/quality=85,width=676/product/image/0f6891ef-9086-430a-b315-ebfe872ab76b.jpg 3840w"/>
                                <noscript/>
                            </span>
                        </div>
                    </div>
                    <div className="css-c1cgl e1c07x489">
                        <span className="css-1qd61ut e1ms5t9c1">
                            <span className="css-1vdqr5b e1ms5t9c0">샛별배송</span>
                        </span>
                        <span className="css-1dry2r1 e1c07x488">[주말특가][아로마티카] 인기 샴푸 3종 (택1)</span>
                        <p className="css-1wejlc3 e1c07x486">자연에서 얻은 순한 사용감</p>
                        <div className="e1c07x487 css-1t4zbyd ei5rudb2">
                            <div>
                                <span className="discount-rate css-19lkxd2 ei5rudb0">63%</span>
                                <span className="sales-price css-18tpqqq ei5rudb1">
                                    10,900
                                    <span className="won">원</span>
                                </span>
                            </div>
                            <div>
                                <span className="dimmed-price css-18tpqqq ei5rudb1">
                                    30,000
                                    <span className="won">원</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </a> */}
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
}

export default Category;