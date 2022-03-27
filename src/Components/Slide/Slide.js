import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export default function Slide() {

  const settings= {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <div>
      <Carousel {...settings}>
        <Myslide>
          <a>
            <img src="/Assets/images/slider-badag.jpg"/>
          </a>
        </Myslide>
        <Myslide>
          <a>
            <img src="/Assets/images/slider-badging.jpg"/>
          </a>
        </Myslide>
        <Myslide>
          <a>
            <img src="/Assets/images/slider-scale.jpg"/>
          </a>
        </Myslide>
        <Myslide>
          <a>
            <img src="/Assets/images/slider-scales.jpg"/>
          </a>
        </Myslide>
      </Carousel>
    </div>
  )
}

const Carousel = styled(Slider)`
  overflow: hidden;
  & > button{
    height: 100%;
    width: 5vw;
    z-index: 1;
    opacity: 0;

    :hover{
      opacity: 1;
    }
  }

  ul li button{
    ::before{
      font-size: 10px;
      color: rgb(150, 158, 171);
    }

    li.slick-active button::before{
      color: #fff;
    }
  }
`;

const Myslide = styled.div`
  background-color: darkcyan;
  cursor: pointer;
  position: relative;

  a{
    position: relative;
    display: block;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }

  img{
    width: 100%;
    height: 100%;
  }
  
  :hover{
    border: 1px solid #fff;
  }
`;