import React from "react";
import { Group } from "./styles";
const CheckBox = ({ checked, name, onChange, id }) => (
  <Group>
    <input type="checkbox" onChange={onChange} id={id} />
    <label htmlFor={id}>{name}</label>
  </Group>
);

export default CheckBox;
