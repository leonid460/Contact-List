import React from 'react';
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

const Arrow = styled.div`
  width: 18px;
  height: 18px;
  border: 5px solid #575555;
  border-radius: 3px;
  border-right: none;
  border-bottom: none;
  background: none;
  transform: rotate(-45deg);
`;

type ArrowButtonProps = {
  className?: string;
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
  unabled?: 'true' | 'false';
}

const ArrowButton = ({className, onClick, unabled}: ArrowButtonProps) => (
  <Wrapper className={className} onClick={onClick} unabled={unabled}>
    <Arrow />
  </Wrapper>
)

export default ArrowButton;