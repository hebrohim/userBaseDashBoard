import React from 'react'
import "./App.css"
import "./components/FontAwesomeIcon"
import Header from './components/Header'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Delete from './components/Header'
function App() {
  return (
    <div className='row'>
      {/* <FontAwesomeIcon icon="user" />
      <FontAwesomeIcon icon="lock" /> */}

{/* <div className='col-lg-6 header'>one</div> */}
<Header />
<div className='col-lg-6 displaySection'>two</div>


    </div>
  )
}



export default App 