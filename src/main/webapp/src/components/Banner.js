import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { images } from "../elements/element";

export default function ImageCarousel({ images }) {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // 자동 슬라이드 설정
    autoplaySpeed: 5000, // 자동 슬라이드 간격 (밀리초 단위)
  };

  return (
    <Wrap>
      <Slider {...settings}>
        {images.map((item) => (
          <div key={item.id}>
            <Img src={item.src} alt={item.alt} />
          </div>
        ))}
      </Slider>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: auto 0;
  margin-bottom: 50px;
`;

const Img = styled.img`
  width: 100%;
  height: 370px;
`;
