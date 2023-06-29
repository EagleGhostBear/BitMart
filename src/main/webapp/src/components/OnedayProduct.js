import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import CartIcon from "../elements/CartIcon";

const OnedayProduct = (props) => {
    const navigate = useNavigate();
    const item = props.data;

    return (
        <div>
            <ImgContainer key={item.seq}
                onClick={() => {
                navigate(`/detail/${item.seq}`);
                window.scrollTo(0, 0);
                }}
            >
                <a href="">
                <img
                    src={item.image}
                />
                <CartIcon></CartIcon>
                </a>
            </ImgContainer>

            <TextWrap>
                <ProductSubTitle>
                {item.subtitle}
                </ProductSubTitle>
                <ProductTitle>
                {item.title}
                </ProductTitle>
                <CostBox>
                    {item.sale === 0 ? (<ProductPrice>{item.price}원</ProductPrice>) : (
                    <>
                        <Sale>{item.sale}%</Sale><ProductPrice>{(Math.floor(((1 - item.sale/100) * item.price) / 10) * 10).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</ProductPrice><SalePrice>{item.price}원</SalePrice>
                    </>)}
                
                {/* <SalePrice>{props.Price}원</SalePrice> */}
                </CostBox>
            </TextWrap>
        </div>
    );
};

const ImgContainer = styled.div`
  display: flex;
  margin: 0px -9px;
  & a {
    width: 335px;
    height: 434px;
    position: relative;
    display: block;
    overflow: hidden;
  }
  & img {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -ms-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
    &:hover {
      transform: scale(1.05);
      -webkit-transform: scale(1.05);
      -moz-transform: scale(1.05);
      -ms-transform: scale(1.05);
      -o-transform: scale(1.05);
    }
  }
`;

const TextWrap = styled.div`
  position: relative;
  z-index: 140;
  display: flex;
  flex-direction: column;
`;

const CostBox = styled.span`
  display: block;
  font-size: 18px;
  line-height: 29px;
  :after,
  :before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Sale = styled.span`
  color: rgb(250, 98, 47);
  font-weight: 800;
  line-height: 1.5;
  white-space: nowrap;
  font-size: 20px;
  margin-right: 6px;
`;

const ProductPrice = styled.span`
  font-weight: 700;
  color: #333;
  letter-spacing: 0;
  font-size: 20px;
  line-height: 29px;
  margin-right: 5px;
`;

const SalePrice = styled.span`
  color: rgb(153, 153, 153);
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  text-decoration: line-through;
  margin-top: 2px;
`;

const ProductTitle = styled.p`
  font-size: 16px;
  line-height: 1.45;
  color: rgb(51, 51, 51);
  font-weight: 400;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: normal;
  word-break: break-all;
  overflow-wrap: break-word;
`;

const ProductSubTitle = styled.p`
  font-size: 14px;
  color: rgb(153, 153, 153);
  line-height: 1.38;
  margin-bottom: 4px;
`;

const CartIconWrap = styled.div`
  position: absolute;
  z-index: 300;
  display: block;
  right: 16px;
  bottom: 16px;
  width: 45px;
  height: 45px;
`;

export default OnedayProduct;