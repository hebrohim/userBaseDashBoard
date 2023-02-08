import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const UserButton = ({ type_of_user, icon,color }) => {
  return (

    <div>
      <button className="users_btn" style={{background:`${color}`,border:`${color}`}}>
        <FontAwesomeIcon icon={icon}  style ={{color:"white",fontSize:"1.5rem"}}/>
      </button>
      <p style={{fontSize:"0.7rem",fontWeight:"lighter"}}>{type_of_user}</p>
    </div>
  );
};

export default UserButton;
