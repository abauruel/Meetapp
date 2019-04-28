import React, { Component } from "react";
import api from "../../services/api";

import Header from "../../components/header";
import CheckBox from "../../components/checkbox";

import { Container, Wrapper, Content } from "./styles";

export default class Profile extends Component {
  state = {
    password: "",
    password_confirmated: "",
    Defaultpreferences: [],
    user: [],
    preferences: []
  };
  componentDidMount = async () => {
    const Defaultpreferences = await api.get("/Preference");
    this.setState({
      Defaultpreferences: Defaultpreferences.data
    });
    const user = await api.get("User");
    this.setState({
      user: user.data
    });
  };
  handleInputChange = e => {
    const target = e.target;
    target.checked
      ? this.setState({ preferences: [...this.state.preferences, e.target.id] })
      : this.setState({
          preferences: this.state.preferences.filter(n => n !== e.target.id)
        });
  };
  handleClick = async e => {
    e.preventDefault();
    const { password, password_confirmated, preferences } = this.state;
    await api.put("User", {
      password,
      password_confirmated,
      preferences
    });
    this.props.history.push("/Dashboard");
  };
  render() {
    const { name, preferences } = this.state.user;
    return (
      <Container>
        <Header />
        <Wrapper>
          <form onSubmit={this.handleClick}>
            <Content>
              <label>Nome</label>
              <p>{name}</p>
              <label>Senha</label>
              <input
                type="password"
                placeholder="Sua senha secreta"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
              <label>Confirmação da senha</label>
              <input
                type="password"
                placeholder="Sua senha secreta"
                value={this.state.password_confirmated}
                onChange={e =>
                  this.setState({ password_confirmated: e.target.value })
                }
              />

              <label>Preferências</label>
              {this.state.Defaultpreferences.map(preference => (
                <CheckBox
                  id={preference.id}
                  key={preference.id}
                  name={preference.description}
                  onChange={this.handleInputChange}
                />
              ))}
              <button>Salvar</button>
            </Content>
          </form>
        </Wrapper>
      </Container>
    );
  }
}
