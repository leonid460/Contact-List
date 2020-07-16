import React from 'react';
import Wrapper from './__styled-components/Wrapper';
import Arrow from './__styled-components/Arrow';


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