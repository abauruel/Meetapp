import React, { Component } from "react";
import api from "../../services/api";

import Header from "../../components/header";
import List from "../../components/list";

import { Container, Content, Meetups, Teste } from "./styles";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

export default class Dashboard extends Component {
  state = {
    enrolled: [],
    notEnrolled: [],
    comingSoon: []
  };
  componentWillMount = async () => {
    const user = await api.get("firstLogin");
    user.data === 0 && this.props.history.push("/preference");

    const enrolled = await api.get("UserMeetups");
    const notEnrolled = await api.get("Usernotenrolled");
    const comingSoon = await api.get("comingSoon");
    this.setState({
      enrolled: enrolled.data,
      notEnrolled: notEnrolled.data,
      comingSoon: comingSoon.data
    });
  };

  render() {
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,

      cssEase: "linear"
    };
    return (
      <Container>
        <Header />

        <Content>
          <p>Inscrições</p>
          <Meetups>
            <Slider {...settings}>
              {this.state.enrolled.map(meetup => (
                <List
                  key={meetup.id}
                  title={meetup.title}
                  data={meetup.date}
                  id={meetup.id}
                  evento={meetup.files.file}
                />
              ))}
            </Slider>
          </Meetups>
          <p>Próximos Meetups</p>
          <Meetups>
            <Slider {...settings}>
              {this.state.comingSoon.map(meetup => (
                <List
                  key={meetup.id}
                  title={meetup.title}
                  data={meetup.date}
                  id={meetup.id}
                />
              ))}
            </Slider>
          </Meetups>
          <p>Recomendados</p>
          <Meetups>
            <Slider {...settings}>
              {this.state.notEnrolled.map(meetup => (
                <List
                  key={meetup.id}
                  title={meetup.title}
                  data={meetup.date}
                  id={meetup.id}
                  onDragStart={this.handleOnDragStart}
                />
              ))}
            </Slider>
          </Meetups>
        </Content>
      </Container>
    );
  }
}
