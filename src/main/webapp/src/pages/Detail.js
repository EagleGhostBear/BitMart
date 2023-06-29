import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
// import { actionCreators as cartActions } from "../redux/modules/cart";

import { useParams } from "react-router-dom";
import DetailItem from "../components/DetailItem";
import DetailImage from "../components/DetailImage";
import { CommentList } from "../components/component";
import axios from "axios";

const Detail = (props) => {
  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.user.is_login);
  const user = useSelector((state) => state.user.user);
  const params = useParams();
  const seq = params.seq;
  // const { seq } = params;

  const detail_list = useSelector((state) => state.post.detail_list);
  // console.log(detail_list);

  // useEffect(() => {
  //   dispatch(postActions.detailPostDB(pid));
  // }, []);

  useEffect(() => {
    if (islogin) {
      console.log("로그인 되었습니다." + user.seq);
      axios.post('/views_update', {
        user: user.seq,
        product: seq
      })
    }
    else {console.log("조횟수가 집계되지 않습니다.(로그인 안됨)");}
  }, []);

  return (
    <React.Fragment>
      {/* <DetailItem {...detail_list}></DetailItem> */}
      <DetailItem seq={seq} />
      {/* <DetailImage /> */}
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
