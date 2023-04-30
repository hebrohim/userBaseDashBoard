import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "./Pagination";

const baseUrl = "https://randomuser.me/api/?results=100";

const ListUsers = () => {
  const [users, setusers] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [userPerPage, setuserPerPage] = useState(3);

  //Load Data
  useEffect(() => {
    axios.get(`${baseUrl}`).then((res) => {
      let users = res.data.results;
      setusers(users);
    });
  }, []);

  // set three users to a page
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  //change page and page content

  const changePage = (pageNumber) => {
    // console.log(`page ${pageNumber} changed`)
    setcurrentPage(pageNumber);
  };

  return (
    <div>
      {currentUsers.map((user) => {
        return (
          <div className="card" key={user.cell}>
            <img id="user_img" src={`${user.picture.large}`} />

            <h5 style={{ fontWeight: "bold" }}>
              {user.name.first} {user.name.last}
            </h5>
            <p>
              <i>
                {user.location.postcode},{user.location.city},
                {user.location.state},{user.location.country}
              </i>
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon="envelope" />
              </span>
              {user.email}
            </p>

            <p>
              <span>
                <FontAwesomeIcon icon="phone-volume" />
              </span>
              {user.cell}
            </p>

            <button>
              <FontAwesomeIcon icon="arrow-right" />
            </button>
          </div>
        );
      })}

      {/* Pagination component */}

      {/* <Pagination users = {users.length} userPerPage= {userPerPage} changePage = {changePage}/> */}
      <section style={{width:"90%",display:"flex",justifyContent:"flex-end"}}>

     

      <button onClick={() => setcurrentPage(currentPage - 1)} style={{backgroundColor:"#b7b7b7  " ,marginLeft:".4rem",color:"white",borderRadius:".3rem"}}>
        <FontAwesomeIcon icon="angle-left" />
      </button>
      <button onClick={() => setcurrentPage(currentPage + 1)} style={{backgroundColor:"#3b3838" ,marginLeft:".4rem",color:"white",borderRadius:".3rem"}}>
        <FontAwesomeIcon icon="angle-right" />
      </button>
      </section>
    </div>
  );
};

export default ListUsers;
