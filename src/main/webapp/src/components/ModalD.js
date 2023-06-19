import React, { useState } from "react";

// export default function Component() {

  const ModalD = ({ open, close, header }) => {

 return (
    <>
      <div
        className={`modalContainer ${open ? "open" : ""}`}
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
          border: "1px solid #5f0080",

          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-40%, -100%)",
          zIndex: 200,
          //padding: "24px",
          display: open ? "flex" : "none",

          //background: "rgba(0, 0, 0, 0.5)",
          
        }}
      >
        <div>
        </div>
        <div>
          <div
            id="modalContainer"
            className="modalContainer"
            style={{
              margin: "0px",
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
              padding: "0px",
              display: "block",
              //border: "2px solid green",
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
                onClick={close}
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
  background-color: ${open ? "rgba(0, 0, 0, 0.5)" : "rgb(255, 255, 255)"};
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

export default ModalD;