import React from "react";
import InputField from "./InputField";
import ListUsers from "./ListUsers";

const DisplayUsers = () => {
  return (
    <div className="col-lg-5 displaySection mt-5" >
    <h3 style={{textAlign:"center"}}>User Lists</h3>
    <p style={{textAlign:"center"}}>Filter by</p>
    <InputField />
    <ListUsers  />
    </div>
  );
};

export default DisplayUsers;
