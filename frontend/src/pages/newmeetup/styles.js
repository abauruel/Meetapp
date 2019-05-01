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
        width:300px;
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
    .react-datepicker {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 0.8rem;
        background: #26202c;
        }
        .react-datepicker__header {
            background: #26202c;
            border-bottom: 1px solid #aeaeae;   
        }
        .react-datepicker__current-month,
        .react-datepicker-time__header,
        .react-datepicker-year-header {
        color: #ffffff;
        }
        .react-datepicker__time-container .react-datepicker__time {
        background: #26202c;
        color:#ffffff;
        }
       .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {
            background: #E5556E;
        }
        
        .react-datepicker__day-name,
        .react-datepicker__day,
        .react-datepicker__time-name
        .react-datepicker__time {
        color:#ffffff;
        }

        .react-datepicker__day--keyboard-selected,
        .react-datepicker__month-text--keyboard-selected {
            background: #E5556E;;
        color: #fff;
        }
        .react-datepicker__day--selected:hover{
            background: #E5556E;    
        }
        
        
 
    .react-datepicker__day--selected{
        background: #E5556E;
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
  img{
    height: 97px;      
        }
    
`;
export const ButtonSave = Styled.button`
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
