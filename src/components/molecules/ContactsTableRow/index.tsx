import React from 'react';
import styled from 'styled-components';
import TableCell from 'components/atoms/ContactsTableCell';
import EditButton from 'components/atoms/EditButton';
import { ContactsTableParams } from 'variables';
import Avatar from 'components/atoms/Avatar';
import { Contact } from 'types';


const TableRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: ${ContactsTableParams.rowMargin}px;
  border-radius: 5px;
  animation: appear 0.5s ease;
  background: #EDEDED;
`;

export type ContactRowProps = Contact & {
  checked: boolean;
  onCheck: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
};

const ContactRow = (props: ContactRowProps) => (
  <TableRow>
    <TableCell>
      <input
        type='checkbox'
        checked={props.checked}
        onChange={props.onCheck}
      />
      <Avatar>{props.name}</Avatar>
    </TableCell>
    <TableCell>{props.name}</TableCell>
    <TableCell>{props.company}</TableCell>
    <TableCell>{props.phone}</TableCell>
    <TableCell>
      <EditButton to={`/edit/${props.id}`} />
    </TableCell>
  </TableRow>
)


export default ContactRow;