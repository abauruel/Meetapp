import Styled from "styled-components";

export const Group = Styled.div`
  
 input{
        display: none;
        
    }
    label{
        font-size: 20px;
        margin-bottom: 0px;
        padding-left: 35px;
        cursor: pointer;
        display: block;

    }
    label::before{
        content: "|_|";
        width: 20px;
        height: 20px;
        border: none;
        border-radius: 4px;
        display: inline;
        background: #c0c0c0;
        margin-right: 10px;
        color: #c0c0c0;
    }
    input:checked + label::before{
        background: #E5556E;
        color: #E5556E;
    }
`;
