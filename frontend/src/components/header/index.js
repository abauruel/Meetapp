import React from "react";
import logo from "../../assets/logo-white.svg";

import { Container, Menu, Signout } from "./styles";
const Header = () => (
  <Container>
    <Menu>
      <img src={logo} alt="Meetup" />
      <ul>
        <li>
          <a href="/Dashboard">Inicio</a>
        </li>
        <li>
          <a href="/Buscar">Buscar</a>
        </li>
        <li>
          <a href="/NewMeetup">Novo Meetup</a>
        </li>
      </ul>
    </Menu>
    <Signout>
      <a href="/Profile">
        <i className="fa fa-user" />
      </a>
    </Signout>
  </Container>
);

export default Header;
