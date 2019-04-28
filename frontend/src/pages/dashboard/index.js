import React, { Component } from "react";
import api from "../../services/api";

import Header from "../../components/header";
import List from "../../components/list";

import { Container, Content } from "./styles";

export default class Dashboard extends Component {
  componentWillMount = async () => {
    const user = await api.get("firstLogin");
    user.data === 0 && this.props.history.push("/preference");

    const inscriptions = await api.get("UserMeetups");
  };
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List title="Inscrições" />
          <List title="Próximos Meetups" />
          <List title="Recomendados" />
        </Content>
      </Container>
    );
  }
}
