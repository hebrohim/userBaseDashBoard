import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserButton from "./UserButton";

const Header = () => {
  return (
    <div className="col-lg-6 header">
      <div className="header_content">
        <div className="text_section">
          <p id="hello_text" style={{ fontSize: " 30px", width: "100%" }}>
            <span style={{ fontWeight: " lighter" }}> Hello, </span>
            <span id="emerald_text" style={{ fontWeight: "bolder" }}>
              Emerald
            </span>
          </p>
          <p style={{ fontSize: " 12px", fontWeight: " lighter" }}>
            Welcome to your dashboard, kindly sort through the user base
          </p>
        </div>

        <div className="input">
          <label>
            <FontAwesomeIcon icon="magnifying-glass" />
          </label>
          <input id="input_user" placeholder="Find a user" />
        </div>
        <p id="showText">Show Users</p>

        <section className="userBtn_container">
          <UserButton
            type_of_user="All users"
            icon="users"
            color="rgb(249, 53, 169)"
          />

          <UserButton
            type_of_user="Male users"
            icon="person"
            color="rgb(48, 187, 181)"
          />

          <UserButton
            type_of_user="Female users"
            icon="person"
            color="rgb(121, 70, 193)"
          />
        </section>
      </div>
    </div>
  );
};

export default Header;
