import React, { useState } from "react";

export default function Component() {

  const ModalD = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;

    // const [modalOpen, setModalOpen] = useState(false);

    // const openModal = () => {
    //   // setModalOpen(prev => !prev);
    //   setModalOpen(true);
    // };
    
    // const closeModal = () => {
    //   // setModalOpen(prev => !prev);
    //   setModalOpen(false);
    // };

return(
    <div
    className="swal2-content"
    >
    <div
      id="modalContainer"
      className="modalContainer"
      style={{
        margin: "0px",
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        padding: "0px",
        display: "block",
      }}
    >
      <div
        className="popupHeader"
        style={{
          margin: "0px",
          boxSizing: "border-box",
          padding: "24px 24px 0px",
          whiteSpace: "pre-line",
          fontSize: "16px",
          fontWeight: 500,
          textAlign: "left",
          color: "rgb(51, 51, 51)",
          lineHeight: "21px",
          marginTop: "0px",
          letterSpacing: "0px",
        }}
      >
        아이디, 비밀번호를 확인해주세요.
      </div>
      <div
        className="popupFooter"
        style={{
          margin: "0px",
          boxSizing: "border-box",
          borderTop: "none",
          padding: "0px 8px",
          height: "56px",
          borderBottomLeftRadius: "6px",
          borderBottomRightRadius: "6px",
          display: "flex",
          WebkitBoxPack: "end",
          justifyContent: "flex-end",
          marginTop: "16px",
        }}
      >
      </div>
    </div>
    </div>
)
  }

 return (
    <>
      <div
        className="modalContainer"
        aria-describedby="swal2-content"
        aria-labelledby="swal2-title"
        aria-live="assertive"
        aria-modal="true"
        role="dialog"
        tabIndex="-1"
        style={{
          border: "none",
          background: "rgb(255, 255, 255)",
          position: "relative",
          boxSizing: "border-box",
          flexDirection: "column",
          justifyContent: "center",
          width: "32em",
          fontFamily: "inherit",
          fontSize: "1rem",
          WebkitTapHighlightColor: "transparent",
          borderRadius: "12px",
          padding: "0px",
          maxWidth: "360px",
          animation: "0s ease 0s 1 normal none running none",
          margin: "auto",
          display: "flex",
          position: "absolute",
          top: 500,
          left: 500,
          zIndex: 200,
          border: "1px solid #5f0080"
        }}
      >
        <div
          // className="swal2-header"
          // style={{
          //   margin: "0px",
          //   boxSizing: "border-box",
          //   padding: "0px 1.8em",
          //   display: "flex",
          //   flexDirection: "column",
          //   alignItems: "center",
          //   WebkitTapHighlightColor: "transparent",
          // }}
        >
          {/* <ul
            className="swal2-progress-steps"
            style={{
              boxSizing: "border-box",
              listStyleType: "none",
              margin: "0px 0px 1.25em",
              padding: "0px",
              background: "inherit",
              flexWrap: "wrap",
              alignItems: "center",
              maxWidth: "100%",
              fontWeight: 600,
              WebkitTapHighlightColor: "transparent",
              display: "none",
            }}
          /> */}
          {/* <div
            className="swal2-icon"
            style={{
              padding: "0px",
              margin: "1.25em auto 1.875em",
              border: "0.25em solid rgb(0, 0, 0)",
              borderRadius: "50%",
              position: "relative",
              boxSizing: "content-box",
              justifyContent: "center",
              width: "5em",
              height: "5em",
              fontFamily: "inherit",
              lineHeight: "5em",
              cursor: "default",
              userSelect: "none",
              WebkitTapHighlightColor: "transparent",
              display: "none",
            }}
          /> */}
          {/* <img
            className="swal2-image"
            style={{
              padding: "0px",
              boxSizing: "border-box",
              border: "0px",
              verticalAlign: "top",
              margin: "1.25em auto",
              maxWidth: "100%",
              WebkitTapHighlightColor: "transparent",
              display: "none",
            }}
          /> */}
          {/* <h2
            id="swal2-title"
            className="swal2-title"
            style={{
              boxSizing: "border-box",
              margin: "0px 0px 0.4em",
              padding: "0px",
              position: "relative",
              maxWidth: "100%",
              color: "rgb(89, 89, 89)",
              fontSize: "1.875em",
              fontWeight: 600,
              textAlign: "center",
              textTransform: "none",
              overflowWrap: "break-word",
              WebkitTapHighlightColor: "transparent",
              display: "none",
            }}
          /> */}
          {/* <button
            className="swal2-close"
            type="button"
            aria-label="Close this dialog"
            style={{
              boxSizing: "border-box",
              font: "inherit",
              margin: "0px",
              textTransform: "none",
              appearance: "button",
              padding: "0px",
              overflow: "hidden",
              transition: "color 0.1s ease-out 0s",
              border: "none",
              borderRadius: "5px",
              background: "0px 0px",
              position: "absolute",
              zIndex: 2,
              top: "0px",
              right: "0px",
              alignItems: "center",
              justifyContent: "center",
              width: "1.2em",
              height: "1.2em",
              backgroundColor: "initial",
              color: "rgb(204, 204, 204)",
              fontFamily: "serif",
              fontSize: "2.5em",
              lineHeight: 1.2,
              cursor: "pointer",
              WebkitTapHighlightColor: "transparent",
              display: "none",
            }}
          >
            ×
          </button> */}
        </div>
        <div
          // className="swal2-content"
          // style={{
          //   boxSizing: "border-box",
          //   margin: "0px",
          //   zIndex: 1,
          //   justifyContent: "center",
          //   color: "rgb(84, 84, 84)",
          //   fontSize: "1.125em",
          //   fontWeight: 400,
          //   lineHeight: "normal",
          //   textAlign: "center",
          //   overflowWrap: "break-word",
          //   WebkitTapHighlightColor: "transparent",
          //   padding: "0px",
          // }}
        >
          <div
            id="modalContainer"
            className="modalContainer"
            style={{
              margin: "0px",
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
              padding: "0px",
              display: "block",
            }}
          >
            <div
              className="popupHeader"
              style={{
                margin: "0px",
                boxSizing: "border-box",
                padding: "24px 24px 0px",
                whiteSpace: "pre-line",
                fontSize: "16px",
                fontWeight: 500,
                textAlign: "left",
                color: "rgb(51, 51, 51)",
                lineHeight: "21px",
                marginTop: "0px",
                letterSpacing: "0px",
              }}
            >
              아이디, 비밀번호를 확인해주세요.
            </div>
            <div
              className="popupFooter"
              style={{
                margin: "0px",
                boxSizing: "border-box",
                borderTop: "none",
                padding: "0px 8px",
                height: "56px",
                borderBottomLeftRadius: "6px",
                borderBottomRightRadius: "6px",
                display: "flex",
                WebkitBoxPack: "end",
                justifyContent: "flex-end",
                marginTop: "16px",
              }}
            >
              <button
                className="modalConfirmBtnDiv"
                style={{
                  boxSizing: "border-box",
                  font: "inherit",
                  margin: "0px",
                  WebkitTapHighlightColor: "transparent",
                  overflow: "visible",
                  textTransform: "none",
                  appearance: "button",
                  cursor: "pointer",
                  borderRadius: "0px",
                  fontFamily:
                    '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                  border: "none",
                  padding: "0px 18px",
                  background: "transparent",
                  width: "auto",
                  height: "100%",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "rgb(95, 0, 128)",
                  backgroundColor: "transparent",
                }}
              >
                확인
              </button>
            </div>
          </div>

          <button
            className="modalCloseBtn"
            type="button"
            style={{
              boxSizing: "border-box",
              font: "inherit",
              overflow: "visible",
              textTransform: "none",
              appearance: "button",
              fontFamily:
                '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
              margin: "0.3125em",
              padding: "0.625em 1.1em",
              boxShadow: "none",
              fontWeight: 500,
              WebkitTapHighlightColor: "transparent",
              cursor: "pointer",
              border: "0px",
              borderRadius: "0.25em",
              background: "rgb(117, 117, 117)",
              backgroundColor: "rgb(117, 117, 117)",
              color: "rgb(255, 255, 255)",
              fontSize: "1em",
              display: "none",
            }}
          >
            Cancel
          </button>
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
  touch-action: manipulation;
  text-size-adjust: 100%;
  height: 100%;
  font-family: "Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif;
  -webkit-tap-highlight-color: transparent;
}

body {
  padding: 0px;
  box-sizing: border-box;
  margin: 0px;
  user-select: none;
  background-color: rgb(255, 255, 255);
  font-size: 14px;
  color: rgb(51, 51, 51);
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
  padding-right: 17px;
  height: auto;
}
`,
          }}
        />
      </>
    );
  }
