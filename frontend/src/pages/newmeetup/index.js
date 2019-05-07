import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Dropzone from "react-dropzone";
import {
  Container,
  Wrapper,
  Content,
  ButtonImage,
  ButtonSave,
  ContainerCheckBox
} from "./styles";
import Header from "../../components/header";
import CheckBox from "../../components/checkbox";

import DataPicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pt from "date-fns/locale/pt-BR";

import api from "../../services/api";
import Moment from "moment";

class Newmeetup extends Component {
  state = {
    title: "",
    description: "",
    day: "",
    location: "",
    file: [],
    imgSrc: null,
    defaultPreferences: [],
    preferences: []
  };

  componentWillmount = () => {
    registerLocale("pt", pt);
  };
  componentDidMount = async () => {
    const preferences = await api.get("/preference");

    this.setState({ defaultPreferences: preferences.data });
    console.log(this.state.defaultPreferences);
  };

  handleDrop = (files, rejectedFiles) => {
    const currentFile = files[0];
    const myFileItemImage = new FileReader();
    myFileItemImage.addEventListener(
      "load",
      () => {
        this.setState({
          imgSrc: myFileItemImage.result
        });
      },
      false
    );
    myFileItemImage.readAsDataURL(currentFile);
    this.setState({ file: files });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { title, description, day, location, file } = this.state;
    const eventDate = Moment(day).format("YYYY-MM-DD h:mm:ss");
    try {
      const {
        data: { id }
      } = await api.post("/Meetup", {
        title,
        description,
        date: eventDate,
        location
      });
      if (!file.length) return;
      const data = new FormData();
      file.map(file => data.append("file", file, file.name));

      const config = {
        headers: { "content-type": "multipart/form-data" }
      };

      await api.post(`File/${id}`, data, config);

      this.props.history.push("/Dashboard");
    } catch (error) {
      return console.log(error);
    }
  };
  handleSetDate = date => {
    this.setState({
      day: date
    });
  };
  handleChange = e => {
    const target = e.target;
    target.checked
      ? this.setState({
          preferences: [...this.state.preferences, e.target.id]
        })
      : this.setState({
          preferences: this.state.preferences.filter(n => n !== e.target.id)
        });
  };
  render() {
    const { title, description, day, location, imgSrc } = this.state;
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
              <DataPicker
                className="datapicker"
                dateFormat="dd/MM/YYYY hh:mm:ss a"
                selected={day}
                showTimeSelect
                onChange={this.handleSetDate}
                placeholderText="Quando o meetup irá acontecer?"
                locale={pt}
                withPortal
              />

              <label>Imagem</label>
              <Dropzone
                onDrop={this.handleDrop}
                multiple={false}
                accept="image/*"
                maxSize={2000000}
              >
                {({ getRootProps, getInputProps }) => (
                  <ButtonImage {...getRootProps()}>
                    <input {...getInputProps()} name="file" />
                    {imgSrc !== null ? (
                      <img src={imgSrc} />
                    ) : (
                      <p>Arrate o clique aqui para adicionar</p>
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

              {this.state.defaultPreferences.map(preference => (
                <CheckBox
                  id={preference.id}
                  key={preference.id}
                  name={preference.description}
                  onChange={this.handleChange}
                />
              ))}

              <ButtonSave type="submit">Salvar</ButtonSave>
            </Content>
          </form>
        </Wrapper>
      </Container>
    );
  }
}

export default withRouter(Newmeetup);
