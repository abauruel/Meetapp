import Styled from 'styled-components';

export const Content = Styled.div`

  height: 100%;

  display: flex;
 
  justify-content: center;
  align-items: center;
  text-decoration:none;
`;

export const Form = Styled.form`
  margin-top: 40px;
  width: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  text-align:left;
  color: #ffffff;
  
 
  label{
    height:19px;
    margin-top: 20px;
    font-family:Helvetica-Bold;
    font-weight: bold;
  }

  input{
    opacity:0.5;
    margin-top:5px;
    background: #26202c;
    border: none;
    font-family:Helvetica;
    font-size:20px;
    color:#ffffff;
    text-align:left;
  }
  button{
    margin: 10px 0 0;
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
}
 

  a{
    text-decoration:none;
    margin: 15px 0;
    opacity:0.6;
    font-family:Helvetica;
    font-size:16px;
    color:#ffffff;
    text-align:center;
  
  }
`;
