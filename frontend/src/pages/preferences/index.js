import React, { Component } from "react";

import { Content, Wrapper, Title, Item } from "./styles";
import CheckBox from "../../components/checkbox";

import api from "../../services/api";

class Preferences extends Component {
  state = {
    Defaultpreferences: [],
    preference: []
  };
  componentWillMount = async () => {
    const Defaultpreferences = await api.get("/Preference");
    this.setState({ Defaultpreferences: Defaultpreferences.data });
  };
  handleInputChange = e => {
    const target = e.target;
    const value = target.value === "checkbox" ? target.checked : target.value;
    target.checked
      ? this.setState({ preference: [...this.state.preference, e.target.id] })
      : this.setState({
          preference: this.state.preference.filter(n => n !== e.target.id)
        });
  };
  handleClick = async () => {
    await api.put("User", {
      preferences: this.state.preferece,
      islogin: 1
    });
    this.props.history.push("/Dashboard");
  };

  render() {
    return (
      <Wrapper>
        <Content>
          <Title>Olá, Teste</Title>
          <p>
            Parece que é seu primeiro acesso por aqui, comece escolhendo algumas
            preferencias para selecionarmos os melhores meetups para você:
          </p>
          <Item>Preferencias</Item>
          {this.state.Defaultpreferences !== null &&
            this.state.Defaultpreferences.map(preference => (
              <CheckBox
                id={preference.id}
                key={preference.id}
                name={preference.description}
                checked={this.state.name}
                onChange={this.handleInputChange}
              />
            ))}
          <button onClick={this.handleClick}>Continuar</button>
        </Content>
      </Wrapper>
    );
  }
}

export default Preferences;
