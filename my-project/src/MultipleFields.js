import React from 'react'

//from design three field 

export default function MultipleFields() {

     const obj={
        FirstName:"",
        LastName:"",
        City:""

     }
        const[user,setuser]=React.useState('')
        


     }


  return (
    <div>
        <from>
      <label>First Name</label>
      <input type="text"></input>

      <label>Last Name</label>
      <input type="text"></input>

      <label>City</label>
      <input type="text"></input>

      <button type="button">Submit</button>
      </from>
    </div>
  )
}
