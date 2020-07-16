import styled from 'styled-components';
import { ContactsTableParams, } from 'variables';


const searchBarHeight = ContactsTableParams.searchBarHeight;

const TableContainer = styled.div`
  display: block;
  height: calc(100% - ${searchBarHeight + 76}px);
`;


export default TableContainer;