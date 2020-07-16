import { Contact } from 'types';


export async function editContact(contact: Contact, token: string) {
  const url = process.env.REACT_APP_API_URL;
  const bearer = 'Bearer ' + token;

  const response = await fetch(url+"/contacts/"+contact.id, {
    method: "PUT",
    headers: {
      'Authorization': bearer,
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(contact)
  });

  if (!response.ok)
    throw new Error(`Couldn't edit contact`);
}