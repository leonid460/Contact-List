import styled from 'styled-components';
import TableCell from 'components/atoms/ContactsTableCell';
import { ContactsTableParams, } from 'variables';


const buttonCellsWidth = ContactsTableParams.buttonCellsWidth;

const HeaderCell = styled(TableCell)`
  align-items: flex-end;
  width: calc((100% - ${(buttonCellsWidth)*2}px) / 3);
  
  color: black;

  &:first-child, &:last-child {
    width: ${buttonCellsWidth}px;
  }
`;


export default HeaderCell;