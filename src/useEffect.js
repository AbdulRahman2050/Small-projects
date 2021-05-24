import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const userss = await fetch(url);
    const u = await userss.json();
    setUsers(u);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {users.map((users) => {
        const { id, login, avatar_url, html_url } = users;
        return (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
            <h2>{login}</h2>

            <a href={html_url}>profile</a>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default UseEffectFetchData;
