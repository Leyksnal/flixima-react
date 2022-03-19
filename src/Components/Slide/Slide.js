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
    centerMode: true
  }

  return (
    <Holder>
      <Container>
        <Slider {...settings}>
          <Myslide>
            <Myimage src="/Assets/images/slider-badag.jpg"/>
          </Myslide>
          <Myslide>
            <Myimage src="/Assets/images/slider-badging.jpg"/>
          </Myslide>
          <Myslide>
            <Myimage src="/Assets/images/slider-scale.jpg"/>
          </Myslide>
          <Myslide>
            <Myimage src="/Assets/images/slider-scales.jpg"/>
          </Myslide>
        </Slider>
      </Container>
    </Holder>
  )
}

const Container = styled(Slider)`
  width: 90%;
  margin-top: 20px;

  ul li button{
    ::before{
      font-size: 10px;
      color: rgb(150, 158, 171);
    }

    li.slick-active button::before{
      color: #fff;
    }

    .slick-list{
      overflow: visible;
    }

    button{
      z-index: 1;
    }
  }
`;

const Myslide = styled.div`
  background-color: darkcyan;
  height: 400px;
  border-radius: 20px;
  
  :hover{
    border: 3px solid #fff;
  }
`;


const Myimage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;