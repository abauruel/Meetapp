import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import { Content, Form } from './styles';

import api from '../../services/api';

export default class Signin extends Component {
  state = {
    email: '',
    senha: '',
  };
  handleSubmmit = async e => {
    e.preventDefault();
    await api.post('session', {
      email: 'abauruel@gmail.comr',
      password: '123',
    });

    this.props.history.push('/Dashboard');
  };
  handleInputChange = e => {
    this.setState({
      email: e.target.value,
    });
    console.log(this.state.email);
  };

  render() {
    return (
      <Content>
        <Form onSubmit={this.handleSubmmit}>
          <img src={logo} alt="Meetup" />
          <label>Email</label>
          <input type="text" name="email" placeholder="Digite seu e-mail" autoComplete="email" />
          <label>Senha</label>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Sua senha secreta"
          />
          <button type="submit">Entrar</button>
          <a href="/Signup">Criar conta grátis</a>
        </Form>
      </Content>
    );
  }
}
