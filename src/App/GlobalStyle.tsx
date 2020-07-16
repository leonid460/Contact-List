import { createGlobalStyle } from 'styled-components';
import { Colors } from 'variables';


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: ${Colors.Black};
  }

  body {
    background: #c6ffdd;
    background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
  }

  @keyframes slide-up {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
  }

  @keyframes slide-down {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;


export default GlobalStyle;