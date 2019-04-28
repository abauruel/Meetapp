import React from "react";
import { Group, HiddenCheckbox, StyledCheckBox, Label } from "./styles";
const CheckBox = ({ checked, name, onChange, id }) => (
  <Group>
    <label>
      <HiddenCheckbox onChange={onChange} name={name} id={id} />
      <StyledCheckBox checked={checked} name={name}>
        <Label>{name}</Label>
      </StyledCheckBox>
    </label>
  </Group>
);

export default CheckBox;
