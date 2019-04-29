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
    opacity: 0.10;
    margin: 20px 0px;
    background: #1c1720;
    opacity: 0.5;
    display: flex;
    width: 900px;
    border-radius: 4px;
    
    input{
        
       
        background: #1c1720;
        border: none;
        font-family:Helvetica;
        font-size:20px;
        color: #fff;
        
    }
    i{
        background: #1c1720;
        padding: 10px;
        color: #fff;
        font-size: 20px;
    }
`;
