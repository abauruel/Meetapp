import Styled from "styled-components";

export const Wrapper = Styled.div`
   
   height: 100%;
    
    display: flex;
    
    flex-direction: column;
    justify-content: center;
    align-items:center;
	
    
`;

export const Content = Styled.div`
        width:350px;
        
        display:flex;
        flex-direction: column;
        p{
            margin-top: 14px;
            opacity:0.8;
            font-family:Helvetica;
            font-size:16px;
            color:#ffffff;
            line-height:28px;
            text-align:left;
        }
        input{
            font-family:Helvetica;
            font-size:18px;
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
        

`;

export const Title = Styled.label`
    font-family:Helvetica-Bold;
    font-size:24px;
    color:#ffffff;
    text-align:left;
`;

export const Item = Styled.label`
margin-top: 30px;
    font-family:Helvetica-Bold;
    font-size:24px;
    color:#ffffff;
    text-align:left;
`;
