import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://randomuser.me/api/?results=100";

const ListUsers = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios.get(`${baseUrl}`).then((res) => {
      let users = res.data.results;
      setusers(users);
    });
  }, []);
  console.log(users);
  return (
    <div>
      {users.map((user) => {
        return (
          <div className="card" key={user.cell}>
            <img id="user_img" src={`${user.picture.large}`} />

            <h5>
              {user.name.first} {user.name.last}
            </h5>
            <p>
              {user.location.postcode},{user.location.city},
              {user.location.state},{user.location.country}
            </p>
            <span>{user.email}</span>
            <span>{user.email}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ListUsers;
