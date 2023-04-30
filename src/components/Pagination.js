import React from 'react'

const Pagination = ({users,userPerPage,changePage}) => {
let pageNumbers = []
console.log(users,userPerPage)
  //loop through users to provide page numbers
  for (let i = 1; i <= Math.ceil(users/userPerPage); i++) {
    pageNumbers.push(i)
 
  }
  return (
  
    <div>
      {pageNumbers.map((number)=>{
        return <button><a onClick={()=>changePage(number)}>{number}</a></button>

      })}
      <br/>
      <br/>
      <br/>


      
      </div>
  )
}

export default Pagination