import Styled from "styled-components";

export const Container = Styled.div`
    display: flex;
 
    p{
        font-family:Helvetica;
        font-weight: bolder;
        font-size:16px;
        color:#ffffff;
        text-align:left;
    }

`;

export const Box = Styled.div`
    display: flex;
    flex-direction:column;
    margin: 15px 20px 25px 0px;

    width:290px;
    height: 200px;
    
    border-color: #FFF;
    border-radius: 5px;
    border: 1px;
    background: #fff;
    img{
        border-radius: 4px 4px 0px 0px;
        height:130px;
    }
`;
export const Description = Styled.div`
display: flex;
justify-content: space-between;
`;
export const Resume = Styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
margin-top: 10px;
label{
    font-family:Helvetica;
    font-weight: bolder;
    font-size:16px;
    color:#222222;
    text-align:left;
}
span{
    font-family:Helvetica;
    font-size:14px;
    color:#999999;
    text-align:left;

}
`;

export const Go = Styled.div`
    display: flex
    justify-content: center;
    align-items: center;
    margin: 15px;
    width: 20px;
    height: 20px;
    background: #E5556E;
    border-radius: 50px;
    padding: 20px;
    i{
        
        color: #FFF;
        font-size: 20px;
    }

`;
