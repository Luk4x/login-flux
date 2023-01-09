import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        font-weight: 500;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    * {
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
    }

    body, #root {
        min-height: 100vh;
        min-width: 100vw;
        display: flex;
        place-items: center;
        background: linear-gradient(45deg, #eee 51%, #666 49%);
    }
`;
