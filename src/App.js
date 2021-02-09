import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {

  const [randomUsers, setRandomUsers] = useState([]);

  async function fetchRandomUserJSON() {
    const response = await fetch("https://randomuser.me/api/");
    const randomUser = await response.json();
    return randomUser.results[0];
  }

  const fetchRandomUser = () => {
    //debugger;
    fetchRandomUserJSON().then(randomUser => {
        console.log(randomUser);
        const {id, name, picture} = randomUser;
        setRandomUsers([
          ...randomUsers,
          {
            id: id.value,
            firstname: name.first,
            lastname: name.last,
            image: picture.thumbnail
          }
        ]);
    });
  }

  return (
    <div>
      <h1>Random Users</h1>
      <button onClick={fetchRandomUser}>Fetch Random User</button>
      <ul>
        {randomUsers.map(user => (
          <li key={user.id}>
            User: {user.firstname} {user.lastname} 
            <img src={user.image} />
            </li>
        ))}
      </ul>
    </div>
  );
}
