import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
// import { actionCreators as cartActions } from "../redux/modules/cart";

import { useParams } from "react-router-dom";
import DetailItem from "../components/DetailItem";
import { CommentList } from "../components/component";

const Detail = (props) => {
  const dispatch = useDispatch();

  const params = useParams();
  const seq = params.seq;
  // const { seq } = params;

  const detail_list = useSelector((state) => state.post.detail_list);
  // console.log(detail_list);

  // useEffect(() => {
  //   dispatch(postActions.detailPostDB(pid));
  // }, []);

  return (
    <React.Fragment>
      {/* <DetailItem {...detail_list}></DetailItem> */}
      <DetailItem seq={seq} />
      {/* <Navbar>
        <span>후기</span>
      </Navbar> */}
      <CommentList seq={seq} />
    </React.Fragment>
  );
};

const Navbar = styled.div`
  height: 60px;
  line-height: 59px;
  display: block;
  background-color: #fafafa;
  border: 1px solid #eee;
  border-left: none;
  width: 1050px;
  margin: 0 auto;
  & span {
    color: #5f0080;
    font-size: 18px;
    font-weight: 700;
    font-family: noto sans;
    padding: 18px;
  }
`;

export default Detail;
