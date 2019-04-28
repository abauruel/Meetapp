import Styled from "styled-components";

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
button{
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
