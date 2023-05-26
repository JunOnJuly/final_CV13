import styled from "styled-components"
import base_css from "../base.css"
import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// image
import carousel0 from "../Icons/carousel0.jpg"
import carousel1 from "../Icons/carousel1.jpg"

// css
import './indexCarousel.css'

export default class Fade extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <ShadowDiv>
        <Slider {...settings}>
          <div>
            <img src={carousel0} />
          </div>
          <div>
            <img src={carousel1} />
          </div>
        </Slider>
      </ShadowDiv>
    );
  }
}

const ShadowDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1%;
  border-radius: 10px;
  margin: 0;
`