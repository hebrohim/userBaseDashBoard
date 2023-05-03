import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ListUsers from "./ListUsers";

const DisplayUsers = () => {
  return (
    <div className="col-lg-6 displaySection">
    <h5 style={{fontWeight:"bold"}}>All Users</h5>
    <p>Filter by</p>
    <div className="input">
        <label><FontAwesomeIcon icon = "magnifying-glass"/></label>
        <input id="input_user" placeholder="Find a user" />
      </div>
    
    <ListUsers  />
    </div>
  );
};

export default DisplayUsers;
