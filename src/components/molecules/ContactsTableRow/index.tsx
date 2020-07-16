import React from 'react';
import ContactRowWrapper from './__styled-components/ContactRowWrapper';
import TableCell from 'components/atoms/ContactsTableCell';
import EditButton from 'components/atoms/EditButton';
import Avatar from 'components/atoms/Avatar';
import { Contact } from 'types';


export type ContactRowProps = Contact & {
  checked: boolean;
  onCheck: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
};

const ContactRow = (props: ContactRowProps) => (
  <ContactRowWrapper>
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
  </ContactRowWrapper>
)


export default ContactRow;