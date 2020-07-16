import styled from 'styled-components';


const Wrapper = styled.div<{ unabled?: 'true' | 'false' }>`
  padding: 14px;
  padding-right: 7px;
  border-right: 1px solid #aaa;
  border-radius: 3px;
  background: #e1e1e1;
  cursor: ${props => props.unabled === 'true' ? 'default' : 'pointer'};

  & > div {
    border-color: ${props => props.unabled === 'true' ? '#e1e1e1' : '#575555'};
  }

  &:hover {
    background: ${props => props.unabled === 'true' ? '#e1e1e1' : '#bbb'};
  }
`;


export default Wrapper;