import React from "react";
import logo from "../../assets/logo-white.svg";

import { Container } from "./styles";
const Header = () => (
  <Container>
    <img src={logo} alt="Meetup" />
    <ul>
      <li>Inicio</li>
      <li>Buscar</li>
      <li>Novo Meetup</li>
    </ul>
  </Container>
);

export default Header;
