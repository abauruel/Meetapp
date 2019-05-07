import React, { Component } from "react";
import Slider from "react-slick";
import Styled from "styled-components";

export default class Teste extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,

      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <Container>
        <Slider {...settings}>
          <div>
            <h3 />
          </div>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
      </Container>
    );
  }
}

const Container = Styled.div`
width: 200px;
display:1;
`;
