import React from "react";
import {useEffect} from "react"
import "./App.css";
import "./components/FontAwesomeIcon";
import Header from "./components/Header";
import DisplayUsers from "./components/DisplayUsers";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Delete from "./components/Header";
function App() {

  return (
    <div className="row container-fluid" style={{boxSizing:"border-box",backgroundColor:"#262a41"}}>
      {/* <FontAwesomeIcon icon="user" />
      <FontAwesomeIcon icon="lock" /> */}

      <Header />
      <DisplayUsers />
      {/* <div className='col-lg-6 displaySection'>two</div> */}
    </div>
  );
}

export default App;
