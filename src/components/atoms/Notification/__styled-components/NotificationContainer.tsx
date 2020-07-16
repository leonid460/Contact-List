import styled from 'styled-components';
import { Colors, BoxShadow } from 'variables';
import { NotificationType } from 'types';


const NotificationContainer = styled.div<{ type?: NotificationType }>`
  min-width: 300px;

  margin: 0 20px 10px 15px;
  padding: 20px;
  border-radius: 10px;

  background: ${props => props.type === 'error' ?
    Colors.orangeRedGradientFallBack
    :
    Colors.greenOrangeGradientFallback
  };
  background: ${props => props.type === 'error' ?
    Colors.orangeRedGradient
    :
    Colors.greenOrangeGradient
  };

  box-shadow: ${BoxShadow};

  color: ${Colors.Black};
  font-weight: 500;
  text-align: center;
  user-select: none;
  cursor: pointer;

  animation: slide-up .4s ease;

  @keyframes move {
    0% {
      transform: translateY(50%);
    }

    100% {
      transform: translateY(0%);
    }
  }
`;


export default NotificationContainer;