export async function deleteContactWithId(contactId: number, token: string) {
  const url = process.env.REACT_APP_API_URL;
  const bearer = 'Bearer ' + token;

  const response = await fetch(url+"/contacts/"+contactId, {
    method: "DELETE",
    headers: {
      'Authorization': bearer,
      'Content-Type': 'application/json;charset=utf-8',
    }
  });

  if (!response.ok)
    throw new Error(`Couldn't delete contact with id ${contactId}`);
}