import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../../assets/logo.svg";

import { Content, Form } from "./styles";

import api from "../../services/api";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };
  handleSubmmit = async e => {
    const { name, email, password } = this.state;
    e.preventDefault();
    try {
      const response = await api.post("user", {
        name,
        email,
        password
      });
      this.props.history.push("/Signin");
    } catch (err) {}
  };
  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Content>
        <Form onSubmit={this.handleSubmmit}>
          <img src={logo} alt="Meetup" />
          <label>Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            autoComplete="email"
            onChange={this.handleInputChange}
          />
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

          <button type="submit">Criar conta</button>
          <Link to="/Signin">Já tenho conta</Link>
        </Form>
      </Content>
    );
  }
}

export default withRouter(Signup);
