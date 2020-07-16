import styled from 'styled-components';


type AvatarProps = {
  textColor: string;
  backgroundColor: string;
  children: React.ReactText;
}

const Avatar = styled.div<AvatarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  
  min-width: 50px;
  min-height: 50px;
  max-width: 50px;
  max-height: 50px;
  border-radius: 50%;
  margin: 0 15px;
  font-weight: bold;
  font-size: 24px;

  background: ${props => props.backgroundColor};
  color: ${props => props.textColor};
`;


export default Avatar;