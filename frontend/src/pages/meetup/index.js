import React, { Component } from "react";
import { Container, Content, Details } from "./styles";
import Header from "../../components/header";

import api from "../../services/api";
import Moment from "moment";

export default class Meetup extends Component {
  state = {
    meetup: []
  };
  componentDidMount = async () => {
    const { id } = this.props.match.params;
    const meetup = await api.get(`Meetup/${id}`);
    this.setState({
      meetup: meetup.data
    });
    console.log(this.state.meetup);
  };
  handleClick = async () => {
    const { id } = this.props.match.params;
    await api.post(`Incription/${id}`);
    this.props.history.push("/Dashboard");
  };
  render() {
    const { title, date, description, location } = this.state.meetup;
    return (
      <Container>
        <Header />
        <Content>
          <img alt="Title" />
          <Details>
            <h1>{title}</h1>
            <span>120 membros</span>
            <p>{description}</p>
            <span>Realizado em:</span>
            <p>{location}</p>
            <span>Quando?</span>
            <p>
              {Moment(this.state.meetup.date).format("DD MMMM YYYY, h:mm a")}
            </p>
            <button onClick={this.handleClick}>Inscreva-se</button>
          </Details>
        </Content>
      </Container>
    );
  }
}
