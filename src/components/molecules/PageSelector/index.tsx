import React from 'react';
import PageSelectorWrapper from './__styled-components/PageSelectorWrapper';
import PrevButton from 'components/atoms/ArrowButton';
import ForwardButton from './__styled-components/ForwardButton';


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