import React, { Component } from "react";
import api from "../../services/api";

export default class Dashboard extends Component {
  componentWillMount = async () => {
    const user = await api.get("firstLogin");
    user.data === 0 && this.props.history.push("/preference");
  };
  render() {
    return (
      <div>
        <h1>Logado</h1>
      </div>
    );
  }
}
