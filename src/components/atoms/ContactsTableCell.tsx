import styled from 'styled-components';
import { ContactsTableParams } from 'variables';


const buttonCellsWidth = ContactsTableParams.buttonCellsWidth;
const rowMargin = ContactsTableParams.rowMargin;


const TableCell = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  
  width: calc((100% - ${(buttonCellsWidth-rowMargin)*2}px) / 3);
  padding: 0.5em 0.5em;

  &:first-child, &:last-child {
    width: ${buttonCellsWidth - rowMargin}px;
  } 
`;


export default TableCell;