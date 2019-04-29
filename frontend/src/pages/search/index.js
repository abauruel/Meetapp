import React, { Component } from "react";
import Header from "../../components/header";

import { Container, Content, Wrapper } from "./styles";
class Search extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Wrapper>
          <Content>
            <i class="fa fa-search" />
            <input type="text" placeholder="Buscar meetups" />
          </Content>
        </Wrapper>
      </Container>
    );
  }
}

export default Search;
