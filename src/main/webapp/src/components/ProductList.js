import React from "react";
import styled from "styled-components";
import CartIcon from "../elements/CartIcon";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const ProductList = (props) => {
  const navigate = useNavigate();

  const item = props.data;

  return (
    <a key={item.seq} className="css-1xyd46f e1c07x4814" href={`/detail/${item.seq}`}>
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
                    <span className="discount-rate css-19lkxd2 ei5rudb0">{item.sale}%  </span>
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
  );
};

export default ProductList;