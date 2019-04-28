import React from "react";
import { Container, Box, Resume, Go, Description } from "./styles";
import evento from "../../assets/evento1.jpg";
import { Link } from "react-router-dom";

const List = ({ title, data, id }) => (
  <Container>
    <Box>
      <img src={evento} alt="Evento" />
      <Description>
        <Resume>
          <label>{title}</label>
          <span>{data}</span>
        </Resume>
        <Go>
          <span>
            <Link to={`/Meetup/${id}`}>
              <i className="fa fa-angle-right" />
            </Link>
          </span>
        </Go>
      </Description>
    </Box>
  </Container>
);

export default List;
