import React, { Component } from "react";
import api from "../../services/api";

import Header from "../../components/header";
import List from "../../components/list";

import { Container, Content, Meetups } from "./styles";

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
    console.log(this.state.notEnrolled);
    return (
      <Container>
        <Header />
        <Content>
          <p>Inscrições</p>
          <Meetups>
            {this.state.enrolled.map(meetup => (
              <List
                key={meetup.id}
                title={meetup.title}
                data={meetup.date}
                id={meetup.id}
              />
            ))}
          </Meetups>
          <p>Próximos Meetups</p>
          <Meetups>
            {this.state.comingSoon.map(meetup => (
              <List
                key={meetup.id}
                title={meetup.title}
                data={meetup.date}
                id={meetup.id}
              />
            ))}
          </Meetups>
          <p>Recomendados</p>
          <Meetups>
            {this.state.notEnrolled.map(meetup => (
              <List
                key={meetup.id}
                title={meetup.title}
                data={meetup.date}
                id={meetup.id}
              />
            ))}
          </Meetups>
        </Content>
      </Container>
    );
  }
}
