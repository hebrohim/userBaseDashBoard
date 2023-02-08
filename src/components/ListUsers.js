import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const baseUrl = "https://randomuser.me/api/?results=100";

const ListUsers = () => {
  const [users, setusers] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [userPerPage, setuserPerPage] = useState(3);

  const indexOfLastPage = currentPage * userPerPage;
  const indexOfFirstPage = indexOfLastPage - userPerPage;
  useEffect(() => {
    axios.get(`${baseUrl}`).then((res) => {
      let users = res.data.results;
      // setusers(users);
      const currentUser = users.slice(indexOfFirstPage,indexOfLastPage)
      setusers(currentUser)

    });
  }, []);

 

    
  // console.log(users);
  return (
    <div>
      {users.map((user) => {
        return (
          <div className="card" key={user.cell}>
            <img id="user_img" src={`${user.picture.large}`} />

            <h5 style={{fontWeight:'bold'}}>
              {user.name.first} {user.name.last}
            </h5>
            <p>
              <i>
              {user.location.postcode},{user.location.city},
              {user.location.state},{user.location.country}
              </i>
            </p>
            <p><span><FontAwesomeIcon icon="envelope"/></span>{user.email}</p>

            <p><span><FontAwesomeIcon icon="phone-volume"/></span>{user.cell}</p>


            <button><FontAwesomeIcon icon="arrow-right"/></button>
            
          </div>
        );
      })}
    </div>
  );
};

export default ListUsers;
