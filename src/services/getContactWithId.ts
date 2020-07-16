import { Contact } from 'types';


export async function getContactWithId(contactId: number, token: string) {
  const url = process.env.REACT_APP_API_URL;
  const bearer = 'Bearer ' + token;

  const response = await fetch(url+"/contacts/"+contactId, {
    method: "GET",
    headers: {
      'Authorization': bearer,
      'Content-Type': 'application/json;charset=utf-8',
    }
  });

  if (!response.ok)
    throw new Error(`Couldn't get contact with id ${contactId}`);
  
  const contact: Contact = await response.json();

  return contact;
}