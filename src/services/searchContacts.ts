import { Contact } from 'types';


export async function searchContacts(page: number, searchQuery: string, token: string,) {
  const url = process.env.REACT_APP_API_URL;
  const query = `${url}/contacts?_page=${page}&q=${searchQuery}`
  const bearer = 'Bearer ' + token;

  const response = await fetch(query, {
    method: "GET",
    headers: {
      'Authorization': bearer,
      'Content-Type': 'application/json;charset=utf-8',
    }
  });

  if (!response.ok) {
    throw new Error(`Couldn't search contacts`);
  }

  const totalCount = response.headers.get('X-Total-Count');

  const contacts: Contact[] = await response.json();
  return {
    contacts, 
    totalCount: Number(totalCount)
  };
} 