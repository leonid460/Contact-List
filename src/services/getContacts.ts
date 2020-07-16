import { Contact } from 'types';


export async function getContacts(page: number, token: string) {
  const url = process.env.REACT_APP_API_URL;
  const bearer = 'Bearer ' + token;

  const response = await fetch(url+"/contacts?_page="+page, {
    method: "GET",
    headers: {
      'Authorization': bearer,
      'Content-Type': 'application/json;charset=utf-8',
    }
  });

  if (!response.ok) {
    throw new Error(`Couldn't get contacts list`);
  }

  const totalCount = response.headers.get('X-Total-Count');

  const contacts: Contact[] = await response.json();
  return {
    contacts, 
    totalCount: Number(totalCount)
  };
} 