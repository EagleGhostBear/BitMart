import React, { useEffect, useState } from "react";
import "../css/modalReview.css";
import axios from "axios";
import { useSelector } from "react-redux";

const ModalReview = (props) => {
  console.log("제품번호:" + props.seq);
  // 열기, 닫기, 작성, 모달 헤더 텍스트를 부모로부터 받아옴
  // const { open, close, header, id } = props;
  const [reviewContent, setReviewContent] = useState("");
  const [showImages, setShowImages] = useState([]);
  const token_key = `${localStorage.getItem("token")}`;
  const user = useSelector((state) => state.user.user);
  const [data, setData] = useState();
  const [product, setProduct] = useState([]);
  const [title, setTitle] = useState();
  const [review, setReview] = useState([]);
  const [contents, setContents] = useState();
  const [isEditing, setIsEditing] = useState(false);

  const handleReviewSubmit = () => {
    axios({
      method: "post",
      url: "/ReviewSubmit",
      data: {
        user: token_key,
        product: props.seq,
        name: user.name,
        title: title,
        content: contents,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    props.close();
  };

  // const handleReviewUpdate = () => {
  //   axios({
  //     method: "post",
  //     url: "/ReviewUpdate",
  //     data: {
  //       user: token_key,
  //       product: props.seq,
  //       name: user.name,
  //       title: title,
  //       content: contents,
  //       //seq: reviewSeq,
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const handleReviewClick = () => {
  //   if (isEditing) {
  //     handleReviewUpdate();
  //   } else {
  //     handleReviewSubmit();
  //   }
  // };

  useEffect(() => {
    axios
      .get("/product_detail?seq=" + props.seq)
      .then((response) => setProduct(response.data));
    axios
      .post("/comment_detail", {
        user: token_key,
        product: props.seq,
      })
      .then((response) => setReview(response.data));
  }, [props.seq]);

  useEffect(() => {
    console.log("review:" + JSON.stringify(review));
  }, [review]);

  useEffect(() => {
    console.log("product:" + JSON.stringify(product));
  }, [product]);

  //이미지 상대경로저장
  const handlePhotoUpload = (event) => {
    const files = event.target.files; // 선택한 파일들의 목록
    let filesUrlLists = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      filesUrlLists.push(URL.createObjectURL(file));
    }

    if (filesUrlLists.length > 8) {
      filesUrlLists = filesUrlLists.slice(0, 8);
    }

    setShowImages(filesUrlLists);
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={props.open ? "openModal modal" : "modal"}>
      {props.open ? (
        <section>
          <header>
            {props.header}
            <button className="close" onClick={props.close}>
              &times;
            </button>
          </header>
          <main>
            {props.children}
            <div className="productImage">
              <span>
                <span>
                  <img
                    aria-hidden="true"
                    src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='72' height='72'/>"
                    alt=""
                    className="productPlaceholder"
                  />
                </span>
                <img
                  className="productImg"
                  alt="이탈리안 & 샐러드 Kit 180g"
                  src={product.image}
                  srcSet={`${product.image} 1x, ${product.image} 2x`}
                  // src="https://product-image.kurly.com/product/image/8654cf12-a4b5-4039-a131-5bb5c3121a6b.jpg"
                  // srcSet="https://product-image.kurly.com/product/image/8654cf12-a4b5-4039-a131-5bb5c3121a6b.jpg 1x, https://product-image.kurly.com/product/image/8654cf12-a4b5-4039-a131-5bb5c3121a6b.jpg 2x"
                />
                <noscript />
              </span>
              <div className="productNameWrap">
                <span className="productName">{product.title}</span>
              </div>
            </div>

            {/* 후기설명 부분시작 */}
            <div>
              <div className="review-container">
                <h2 className="review-title">후기는 이렇게 작성해 보세요</h2>
                <p className="review-description">
                  제품의{" "}
                  <span className="highlighted-text">맛·향·크기·사용감</span>{" "}
                  등을 설명해주세요
                  <br />
                  <strong>좋았던 점, 아쉬웠던 점</strong>도 솔직하게
                  얘기해주세요
                </p>
                <div className="image-container">
                  <div className="image-item">
                    <img
                      className="image"
                      alt="상품을 활용한 나만의 레시피 사진"
                      src="https://res.kurly.com/_next/static/images/review_guide_image_1-3beb7e9b6d7dd995a2ae8fdc497ba6ee.png"
                    />
                    <p className="image-description">
                      상품을 활용한 나만의 레시피 사진
                    </p>
                  </div>
                  <div className="image-item">
                    <img
                      className="image"
                      alt="박스 안에 숨겨진 리얼 상품 사진"
                      src="https://res.kurly.com/_next/static/images/review_guide_image_2-1cdd20f4f95a0ce7ece83ef5d328cfe7.png"
                    />
                    <p className="image-description">
                      박스 안에 숨겨진 리얼 상품 사진
                    </p>
                  </div>
                  <div className="image-item">
                    <img
                      className="image"
                      alt="분위기를 느낄 수 있는 플레이팅"
                      src="https://res.kurly.com/_next/static/images/review_guide_image_3-cd27b96465a4dcba641b2c46bb3bbf53.png"
                    />
                    <p className="image-description">
                      분위기를 느낄 수 있는 플레이팅
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* 내용 부분시작 */}
            <form>
              <div className="textWrap">
                <label className="textLabel">
                  제목{props.product}
                  <sup className="sup">*</sup>
                </label>
                <div className="Content">
                  <textarea
                    className="textTitle"
                    id="title"
                    inputMode="text"
                    placeholder="제목을 입력하세요"
                    value={review.content}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="textWrap">
                <label className="textLabel">
                  내용
                  <sup className="sup">*</sup>
                </label>
                <div className="textcontentWrap">
                  <div className="textContent">
                    <textarea
                      className="textarea"
                      id="contents"
                      name="contents"
                      aria-label="textarea-message"
                      inputMode="text"
                      placeholder="상품 특성에 맞는 후기를 작성해주세요. 예)레시피, 겉포장 속 실제 구성품사진, 플레이팅, 화장품 사용자의 피부타입 등(최소 10자 이상)"
                      value={review.content}
                      onChange={(e) => {
                        setContents(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
          </main>
          {/* 사진 업로드시작 */}

          <div className="uploadWrap">
            <label className="upload">사진 첨부</label>

            <label className="photoUpload">
              <img
                src="https://res.kurly.com/pc/ico/1806/img_add_thumb_x2.png"
                style={{
                  width: "20px",
                  marginTop: "33px",
                  color: "#e2e2e2",
                }}
              />
              <input
                type="file"
                id="photoUpload"
                accept="image/*"
                multiple
                onChange={handlePhotoUpload}
              />
            </label>

            {/* 이미지 미리 보기 */}
            {showImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Preview ${index + 1}`}
                style={{ width: "100px", height: "100px" }}
              />
            ))}
          </div>

          <footer>
            <button className="close" onClick={props.close}>
              닫기
            </button>
            <button className="write" onClick={handleReviewSubmit}>
              {/* {isEditing ? "수정" : "등록"} */}
              등록
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default ModalReview;
