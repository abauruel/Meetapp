import React from "react";
import { Container, Box, Resume, Go, Description } from "./styles";
import evento from "../../assets/evento1.jpg";

const List = ({ title }) => (
  <Container>
    <p>{title}</p>
    <Box>
      <img src={evento} alt="Evento" />
      <Description>
        <Resume>
          <label>{title}</label>
          <span>120m</span>
        </Resume>
        <Go>
          <span>seta</span>
        </Go>
      </Description>
    </Box>
  </Container>
);

export default List;
