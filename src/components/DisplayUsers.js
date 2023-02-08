import React from "react";
import InputField from "./InputField";
import ListUsers from "./ListUsers";

const DisplayUsers = () => {
  return (
    <div className="col-md-6 displaySection" style={{}}>
    <h3>All Users</h3>
    <p>Filter by</p>
    <InputField />
    <ListUsers  />
    </div>
  );
};

export default DisplayUsers;
