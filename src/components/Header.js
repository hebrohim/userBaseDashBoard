import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserButton from "./UserButton";
import InputField from "./InputField";

const Header = () => {
  return (
    <div className="col-md-6 header">
      <div className="header_content">
        <div className="text_section">
          <p id="hello_text" style={{ fontSize: " 30px" }}>
           
           <span style={{ fontWeight: " lighter" }}>  Hello,</span>
            <span id="emerald_text" style={{ fontWeight: "bolder" }}>Emerald</span>
          </p>
          <p style={{ fontSize: " 12px",fontWeight: " lighter" }}>
            Welcome to your dashboard, kindly <br/>sort through the user base
          </p>
        </div>

        <InputField />

        <div className="users_section " >
          <p>Show Users</p>
          <UserButton type_of_user="All users" icon = "users" color = "rgb(249, 53, 169)" />
          <UserButton type_of_user="Male users" icon = "person" color="rgb(48, 187, 181)" />
          <UserButton type_of_user="Female users" icon ="Person-dress" color="rgb(121, 70, 193)" />
        </div>
      </div>
    </div>
  );
};

export default Header;
