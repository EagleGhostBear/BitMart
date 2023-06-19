import React from 'react';
import img from '../img/jadoo.jpg';

const OrderList = () => {
    return (
        <div className='OrderList' style={ OrderListStyle }>
            <div className='Container' style={ContainerStyle}>
                <div style={titleStyle} className='Title'>
                    <h2 className='h2'>주문서</h2>
                </div>
                <div className='MainContainer' style={MainContainerStyle}>
                    <div className='List' style={listStyle}>
                        <h3>주문 상품</h3>
                    </div>
                    <div className='List2' style={list2Style}>
                        <img className='ListImg' src={img} alt='이미지파일' style={ imgStyle }></img>
                        <span className='ProductName' style={ ProductNameStyle }>대석 자두 1.2kg</span>
                        <span className='ProductNum' style={ ProductNumStyle }>1개</span>
                        <span className='ProductPrice' style={ productPriceStyle }>17,900원</span>
                    </div>
                    <div className='Userinfo' style={UserinfoStyle}>
                        <h3>주문자 정보</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Style부분

const OrderListStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const ContainerStyle = {
    width : "1050px",
    padding: "60px, 0px"
}

const titleStyle = {
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'bold',
    color: 'black'
}

const MainContainerStyle = {
    letterSpacing: '-0.5px',
}

const listStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgb(51, 51, 51)",
    fontSize: 18,
};

const list2Style = {
    display: "flex",
    flexDirection: "row",
    webkitboxalign: "center",
    alignItems: "center",
    paddingTop: "20px",
    borderBottom: "1px solid rgb(244, 244, 244)",
    width: "100%",
}

const imgStyle = {
    width: "60px",
    height: "78px",
    marginright: "20px",
    cursor: "pointer",
    backgroundcolor: "rgb(245, 245, 245)"
}

const ProductNameStyle = {
    maxHeight: '48px',
    fontSize: '16px',
    lineHeight: '24px',
    color: 'rgb(0, 0, 0)',
    display: 'webkit-box',
    overflow: 'hidden',
    wordBreak: 'break-all',
    whiteSpace: 'normal',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical'
};

const ProductNumStyle = {
    width: "100px",
    fontsize: "14px",
    lineheight: "22px",
    textalign: "center",
}

const productPriceStyle = {
    display: 'block',
    fontWeight: 700,
    fontSize: '16px',
    color: 'rgb(51, 51, 51)',
    lineHeight: '22px',
    wordBreak: 'break-all'
};

const UserinfoStyle = {
    display: "flex",
    flexdirection: "row",
    webkitboxpack: "justify",
    justifycontent: "space-between",
    webkitboxalign: "center",
    alignitems: "center",
    margintop: "75px",
    borderbottom: "1px solid rgb(51, 51, 51);"
}

export default OrderList;