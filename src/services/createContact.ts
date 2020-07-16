import { Contact } from 'types';


export async function createContact(contact: Contact, token: string) {
  const url = process.env.REACT_APP_API_URL;
  const bearer = 'Bearer ' + token;

  const response = await fetch(url+"/contacts", {
    method: "POST",
    headers: {
      'Authorization': bearer,
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      name: contact.name,
      phone: contact.phone,
      company: contact.company
    })
  });

  if (!response.ok)
    throw new Error(`Couldn't create contact`);
}