import React from 'react';
import styled from 'styled-components';
import PrevButton from 'components/atoms/ArrowButton';


const PageSelectorWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px;
  box-sizing: border-box;
`;

const ForwardButton = styled(PrevButton)`
  transform: rotate(180deg);
`;

type PageSelectorProps = {
  currentPage: number;
  maxPage: number;
  setPage: (page: number) => void;
}

const PageSelector = ({currentPage, maxPage, setPage}: PageSelectorProps) => {
  const handleForwardButton = () => {
    if (currentPage < maxPage) {
      setPage(currentPage + 1);
    }
  }

  const handlePrevButton = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  }

  
  return (
    <PageSelectorWrapper>
      <PrevButton
        onClick={() => handlePrevButton()}
        unabled={currentPage === 1 ? 'true' : 'false'}
      />
      <ForwardButton
        onClick={() => handleForwardButton()}
        unabled={currentPage === maxPage ? 'true' : 'false'}
      />
    </PageSelectorWrapper>
  )
}


export default PageSelector;