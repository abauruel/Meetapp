import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Dropzone from "react-dropzone";
import { Container, Wrapper, Content, ButtonImage, ButtonSave } from "./styles";
import Header from "../../components/header";
import CheckBox from "../../components/checkbox";
class Newmeetup extends Component {
  state = {
    title: "",
    description: "",
    data: "",
    location: "",
    file: []
  };
  handleDrop = file => this.setState({ file });

  handleUpload = file => {};

  handleSubmit = () => {};
  render() {
    const { title, description, data, location } = this.state;
    return (
      <Container>
        <Header />
        <Wrapper>
          <form onSubmit={this.handleSubmit}>
            <Content>
              <label>Titulo</label>
              <input
                type="text"
                placeholder="Digite o titulo do meetup"
                value={title}
                onChange={e => this.setState({ title: e.target.value })}
              />
              <label>Descrição</label>
              <input
                type="text"
                placeholder="Descreva seu meetup"
                value={description}
                onChange={e => this.setState({ description: e.target.value })}
              />
              <label>Data/hora</label>
              <input
                type="text"
                placeholder="Quando o meetup irá acontecer?"
                value={data}
                onChange={e => this.setState({ data: e.target.value })}
              />
              <label>Imagem</label>
              <Dropzone
                onDropAccepted={this.handleUpload}
                onDrop={this.handleDrop}
              >
                {({ getRootProps, getInputProps }) => (
                  <ButtonImage {...getRootProps()}>
                    <input {...getInputProps()} />
                    {!this.state.file.length ? (
                      <p>Arrate o clique aqui para adicionar</p>
                    ) : (
                      <p>uploaded</p>
                    )}
                  </ButtonImage>
                )}
              </Dropzone>
              <label>Localização</label>
              <input
                type="text"
                placeholder="Onde seu meetup irá acontecer?"
                value={location}
                onChange={e => this.setState({ location: e.target.value })}
              />

              <label>Tema do meetup</label>
              <CheckBox />
              <ButtonSave>Salvar</ButtonSave>
            </Content>
          </form>
        </Wrapper>
      </Container>
    );
  }
}

export default withRouter(Newmeetup);
