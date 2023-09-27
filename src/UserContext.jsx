import React from 'react';
import { TOKEN_POST, USER_GET } from './api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const apiResponse = await fetch(url, options);
    const apiResponseJson = await apiResponse.json();
    setData(apiResponseJson);
    setLogin(true);
  }

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password });
    const apiResponse = await fetch(url, options);
    const { token } = await apiResponse.json();
    window.localStorage.setItem('token', token);
    await getUser(token);
  }

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  );
};
