import styled from 'styled-components';


const AddButtonWrapper = styled.button`
  width: 40px;
  height: 40px;
  
  margin-right: 10px;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;

  background: #3399FF;
  color: white;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: #2481DD;
  }
`;


export default AddButtonWrapper;