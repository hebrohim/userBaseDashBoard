import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css"
const UserButton = ({ type_of_user, icon,color }) => {
  return (
<section >
  
      <button className="users_btn" style={{background:`${color}`,border:`${color}`}}>
        <FontAwesomeIcon icon={icon}/>
      </button>

      <p id ="user_type" style={{fontSize:"0.7rem",fontWeight:"lighter",marginTop:".5rem"}}>{type_of_user}</p>
      </section>
  );
};

export default UserButton;
