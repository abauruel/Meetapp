import Styled from "styled-components";

export const Container = Styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;    
`;
export const Content = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        margin: 20px 0;
    }
`;
export const Details = Styled.div`
    display: flex;
    flex-direction: column
    align-items: left;
    h1{
        font-family: Helvetica;
        margin-top: 10px;
        color:#fff;
    }
    span{
        font-family: Helvetica;
        color:#999999;
        font-size: 14px;
    }
    p{
        margin: 20px 0;
        opacity:0.8;
        font-family:Helvetica;
        font-size:14px;
        color:#ffffff;
        line-height:24px;
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
`;
