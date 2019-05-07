import React from "react";
import { Container, Box, Resume, Go, Description } from "./styles";

import { Link } from "react-router-dom";

const List = ({ title, data, id, evento }) => (
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
