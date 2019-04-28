import Styled from "styled-components";

export const Group = Styled.div`



`;

export const HiddenCheckbox = Styled.input.attrs({ type: "checkbox" })`

`;

export const StyledCheckBox = Styled.div`
  display: inline-block;
  margin: 10px;
  width: 20px;
  height: 20px;
  background: ${props => (props.checked === props.name ? "#E5556E" : "#fff")};
  border-radius: 4px;
  transition: all 150ms;
  
`;
export const Label = Styled.label`
    width: 10px;
    margin-left: 30px;
    font-family:Helvetica;
    font-size:18px;
    color:#ffffff;
    text-align:left;
  
`;
