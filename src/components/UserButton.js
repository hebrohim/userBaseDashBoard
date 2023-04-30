import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css"
const UserButton = ({ type_of_user, icon,color }) => {
  return (
<section>
    <div className="users_section">
      <button className="users_btn" style={{background:`${color}`,border:`${color}`}}>
        <FontAwesomeIcon icon={icon}/>
      </button>
    </div>
      <p id ="user_type" style={{fontSize:"0.7rem",fontWeight:"lighter",marginTop:".5rem"}}>{type_of_user}</p>
      </section>
  );
};

export default UserButton;
