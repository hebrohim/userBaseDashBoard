import React from 'react'

const UserButton = ({type_of_user}) => {
  return (
    <div className='bg-danger' style={{width:"20%"}}>
        <img></img>
        <p>{type_of_user}</p>
    </div>
  )
}

export default UserButton