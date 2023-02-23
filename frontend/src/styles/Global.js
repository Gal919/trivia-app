import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    };
    
    body {
        background: linear-gradient(135deg, #28313B, #485461);
        margin: 0;
        height:100vh;
    };
`;
