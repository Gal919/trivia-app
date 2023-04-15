import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    };
    
    body {
        background: linear-gradient(135deg, #28313B, #485461);
        background-size: cover;
        color: #ffffff;
        min-height: 100vh;
    };
`;
