export async function auth(username: string, password: string) {
  const url = process.env.REACT_APP_API_URL;
  const response = await fetch(url+"/auth/login", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({username, password})
  });

  if (!response.ok) {
    throw new Error(`Couldn't log in the app`);
  }

  const json = await response.json();
  
  return json.access_token;
}