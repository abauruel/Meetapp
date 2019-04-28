import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{    
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
html, body, #root{
    height: 100%;
}
body{
    background: #26202c;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    
}
`;
export default GlobalStyle;
