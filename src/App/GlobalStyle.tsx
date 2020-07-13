import { createGlobalStyle } from 'styled-components';
import { Colors } from 'variables';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: ${Colors.Black};
  }

  body {
    /* display: flex;
    flex-direction: row;
    justify-content: center;

    overflow-x: hidden;
    */
    background: #c6ffdd; /* fallback for old browsers */
    background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
  }

  @keyframes slide-up {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
  }

  @keyframes slide-down {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;


export default GlobalStyle;