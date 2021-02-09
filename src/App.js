import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [randomUsers, setRandomUsers] = useState([]);

  const fetchRandomUser = () => {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const user = data.results[0];
        setRandomUsers([
          ...randomUsers,
          {
            firstname: user.name.first,
            lastname: user.name.last,
            image: user.picture.thumbnail
          }
        ]);
      });
  };

  return (
    <div>
      <h1>Random Users</h1>
      <button onClick={fetchRandomUser}>Fetch Random User</button>
      <ul>
        {randomUsers.map(user => (
          <li>User: {user.firstname} {user.lastname} <img src={user.image} /></li>
        ))}
      </ul>
    </div>
  );
}
