import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import { Content, Form } from "./styles";

import api from "../../services/api";
import { login } from "../../services/auth";
import { Link, withRouter } from "react-router-dom";

class Signin extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmmit = async e => {
    e.preventDefault();
    try {
      const response = await api.post("session", {
        email: this.state.email,
        password: this.state.password
      });
      console.log(response);
      login(response.data.token);
      this.props.history.push("/Dashboard");
    } catch (err) {}
  };
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Content>
        <Form onSubmit={this.handleSubmmit}>
          <img src={logo} alt="Meetup" />
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            autoComplete="email"
            onChange={this.handleInputChange}
          />
          <label>Senha</label>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Sua senha secreta"
            onChange={this.handleInputChange}
          />
          <button type="submit">Entrar</button>
          <Link to="/Signup">Criar conta grátis</Link>
        </Form>
      </Content>
    );
  }
}

export default withRouter(Signin);
