import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { useStore } from 'store';
import TableRow from 'components/molecules/ContactsTableRow';
import TableCell from 'components/atoms/ContactsTableCell';
import AddButton from 'components/atoms/AddButton';
import DeleteButton from 'components/atoms/DeleteButton';
import SearchBar from 'components/molecules/SearchBar';
import PageSelector from 'components/molecules/PageSelector';
import MainPageTemplate from 'components/templates/MainPage';
import { getContacts } from 'services/getContacts';
import { searchContacts } from 'services/searchContacts';
import { deleteContactWithId } from 'services/deleteContactWithId';
import { Contact } from 'types';
import { ContactsTableParams, } from 'variables';


const TableContainer = styled.div`
  display: block;
  height: calc(100% - ${ContactsTableParams.searchBarHeight + 76}px);
`;

const MainRowsWrapper = styled.div`
  max-height: calc(100% - 56px);
  height: 100%;
  overflow-y: scroll;
`;

const TableHeaderWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  transition: 0.5s;
  margin: 0;
  border-radius: 0;
  background: #C7C7C7;
`;

const buttonCellsWidth = ContactsTableParams.buttonCellsWidth;

const HeaderCell = styled(TableCell)`
  align-items: flex-end;
  width: calc((100% - ${(buttonCellsWidth)*2}px) / 3);
  
  color: black;

  &:first-child, &:last-child {
    width: ${buttonCellsWidth}px;
  }
`;


const MainPage = () => {
  const mounted = useRef(true);

  const { userInfo } = useStore();
  const token = userInfo.token;
  const [checkList, setCheckList] = useState<Set<number>>(new Set<number>());
  const [page, setPage] = useState(1);

  const [maxPage, setMaxPage] = useState(1);
  const [contacts, setContacts] = useState<Contact[]>([]);
  
  const [searchInput, setSearchInput] = useState('');
  const [mode, setMode] = useState<'all' | 'search'>('all');

  const handleContactsFetch = useCallback(
    async () => {
      try {
        let contacts: Contact[];
        let totalCount: number;

        switch (mode) {
          case 'all':
            ({ contacts, totalCount } = await getContacts(page, token));
            break;
          case 'search':
            ({ contacts, totalCount } = await searchContacts(page, searchInput, token));
            break;
        }

        const maxPage = Math.ceil((totalCount || 1) / 10);

        if (mounted.current === true) {
          console.log(contacts);
          setContacts(contacts);
          setMaxPage(maxPage);
        }

      } catch (error) {
        console.log(error);
      }
    },
    [mode, page, searchInput, setContacts, setMaxPage, token]
  );

  const addToCheckList = (id: number) => {
    const newSet = new Set(checkList);
    newSet.add(id);
    setCheckList(newSet);
  }

  const deleteFromCheckList = (id: number) => {
    console.log('delete ' + id)
    const newSet = new Set(checkList);
    newSet.delete(id);
    setCheckList(newSet);
    console.log(newSet);
  }

  const handleCheck = (id: number) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.checked);
      event.target.checked ? addToCheckList(id) : deleteFromCheckList(id);
    }
  }

  const handleDelete = async (id: number) => {
    try {
      await deleteContactWithId(id, token);
      deleteFromCheckList(id);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteSelected = () => {
    const checkListCopy = new Set(checkList);
    checkListCopy.forEach(id => {
      handleDelete(id);
    });
    setPage(1);
    handleContactsFetch();
  }

  useEffect(() => {
    mounted.current = true;
    handleContactsFetch();

    return function cleanup() {
      console.log('clean up');
      mounted.current = false;
    }
  }, [handleContactsFetch]);

  return (
    <MainPageTemplate>
      <SearchBar
        value={searchInput}
        setValue={setSearchInput}
        setMode={setMode}
      />
      <TableContainer>
        <TableHeaderWrapper>
          <HeaderCell>
            <AddButton />
            <DeleteButton onClick={() => handleDeleteSelected()} />
          </HeaderCell>
          <HeaderCell>Name</HeaderCell>
          <HeaderCell>Company</HeaderCell>
          <HeaderCell>Phone</HeaderCell>
          <HeaderCell></HeaderCell>
        </TableHeaderWrapper>
        <MainRowsWrapper>
          {contacts &&
            contacts.map((contact, key) => (
              <TableRow
                key={`${page}${key}`}
                {...contact}
                checked={checkList.has(contact.id)}
                onCheck={handleCheck(contact.id)}
              />
            ))
          }
        </MainRowsWrapper>
      </TableContainer>
      <PageSelector
        currentPage={page}
        maxPage={maxPage}
        setPage={setPage}
      />
    </MainPageTemplate>
  )
}


export default MainPage;