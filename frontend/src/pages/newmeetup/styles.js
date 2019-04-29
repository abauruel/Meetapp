import Styled from "styled-components";
import Dropzone from "react-dropzone";

export const Container = Styled.div`
 height: 100%;
display:flex;
flex-direction: column;

`;

export const Wrapper = Styled.div`

    display: flex;    
    flex-direction: column;
    justify-content: center;
    align-items:center;
	
    
`;

export const Content = Styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    justify-content: flex-start;
    align-items: left;
    label{
        margin:20px 0px;
        font-family:Helvetica;
        font-weight: bolder;
        font-size:16px;
        color:#ffffff;
    
    }
    input{
        opacity: 0.5;
        background: #26202c;
        border: none;
        font-family:Helvetica;
        font-size:20px;
        color: #fff;
    }
    p{
        font-family:Helvetica;
        font-size:20px;
        color:#ffffff;
    }
   
    
`;
export const ButtonImage = Styled.button`
opacity: 0.5;
  background: none; 
  border-width: 1px;
  border-style: dashed;
  border-color: #c0c0c0;
  width: 300px;
  height: 100px;
  cursor: pointer;
  i{
      opacity: 0.5;
      font-size: 24px;
      color: #c0c0c0;

  }
    
`;
export const ButtonSave = Styled.div`
        margin: 20px 0 0;
        background: #E5556E;
        border-radius: 50px;
        height: 44px;
        border: 0;
        color: #fff;
        font-weight: bold;
    cursor: pointer;
        font-size: 16px;
        :hover{
        background: #eb788c;   
        }
`;
