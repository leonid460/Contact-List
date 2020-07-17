import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useStore } from 'store';
import { useHistory, useParams } from 'react-router-dom';
import Input from 'components/atoms/Input';
import Header from 'components/atoms/Header';
import FormContainer from 'components/atoms/FormContainer';
import SubmitButton from 'components/atoms/SubmitFormButton';
import SimplePage from 'components/templates/SimpleWindowPage';
import { getContactWithId } from 'services/getContactWithId';
import { createContact } from 'services/createContact';
import { editContact } from 'services/editContact';
import { Contact } from 'types';
import { callNotification } from 'utils/callNotification';


type CreateOrEditPageProps = {
  type: 'edit' | 'create';
}

const CreateOrEditPage = ({ type }: CreateOrEditPageProps) => {
  const mounted = useRef(true);
  const { id } = useParams();
  const { userInfo } = useStore();
  const history = useHistory();
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
      const token = userInfo.token;
      const contact: Contact = {id, name, company, phone}
      const makeRequest = type === 'create' ?
        () => createContact(contact, token)
        :
        () => editContact(contact, token);

      await makeRequest();
      history.push('/');
      callNotification({
        content: `Successfully ${type === 'edit' ? 'edited' : 'created'} contact`,
        type: 'info'
      })

    } catch (error) {
      callNotification({
        content: error.message,
        type: 'error'
      })
    }
  }

  const getContact = useCallback(
    async (id: number) => {
      try {
        const contact = await getContactWithId(id, userInfo.token);
        setName(contact.name);
        setPhone(contact.phone);
        setCompany(contact.company);
      } catch (error) {
        callNotification({
          content: error.message,
          type: 'error'
        })
      }
    },
    [userInfo.token]
  )

  useEffect(() => {
    mounted.current = true;
    type === 'edit' && getContact(id);

    return () => {mounted.current = false}
  }, [getContact, id, type]);

  return (
    <SimplePage>
      <FormContainer onSubmit={onSubmit}>
        <Header>{type === 'edit' ? 'Edit Contact' : 'Create Contact'}</Header>
        <Input
          value={name}
          setValue={setName}
          placeholder='Name'
        />
        <Input
          value={company}
          setValue={setCompany}
          placeholder='Company'
        />
        <Input
          value={phone}
          setValue={setPhone}
          placeholder='Phone'
        />
        <SubmitButton type='submit'>
          {type === 'edit' ? 'Save' : 'Create'}
        </SubmitButton>
      </FormContainer>
    </SimplePage>
  );
}


export default CreateOrEditPage;