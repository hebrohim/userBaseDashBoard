import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserButton from "./UserButton";
import InputField from "./InputField";

const Header = () => {
  return (

    <div className="col-lg-6 header" >
      <div style={{ border: "2px solid red" }} >
      <div className="text_section" >
        <p id="hello_text" style={{ fontSize: " 30px" }}>
          Hello,
          <span id="emerald_text">Emerald</span>
        </p>
        <p style={{ fontSize: " 12px" }}>
          Welcome to your dashboard, kindly sort through the user base{" "}
        </p>
      </div>

      <InputField />

      <div className="users_section">
        <UserButton type_of_user="All users" />
        <UserButton type_of_user="Male users" />
        <UserButton type_of_user="Female users" />
      </div>
      </div> 
      </div>
    

  );
};

export default Header;
