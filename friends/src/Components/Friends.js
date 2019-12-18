import React, { useState, useEffect } from "react";


import axios from "axios";

export default function Friends(props) {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios()
      .get("http://localhost:7000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  }, []);
  return (
    <div className="friends">
      {friends.map(q => (
        <li key={q.id}>{q.name}</li>
      ))}
    </div>
  );
}
