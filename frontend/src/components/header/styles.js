import Styled from "styled-components";

export const Container = Styled.div`
  display:flex;
  background: #E5556E;
  justify-content: space-between;
 
 
`;
export const Menu = Styled.div`
display: flex;
img{
     border-color: #FFF;
     margin-left: 10px;
 }
  ul{
      padding:20px;
      margin: 10px;
      list-style: none;
  }
  li{
     
      padding: 10px;
      display: inline;
      font-family:Helvetica;
      font-weight: bolder;
      font-size:16px;
      color:#ffffff;
      text-align:center;
      a{
        text-decoration:none;
        color:#ffffff;
      }
  }
`;
export const Signout = Styled.div`
display:flex;
margin: 10px;
padding: 20px;
i{
    font-size: 20px;
    color: #FFF;
}
`;
