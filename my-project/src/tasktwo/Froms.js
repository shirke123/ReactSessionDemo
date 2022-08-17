import React,{ useState } from 'react'
import ReactDOM from "react-dom";
import axios from "axios";

export default function Froms() {


  const[user,setUser]=React.useState({
    firstName:'',
    lastName:'',
    Address:'',
    Email:'',
    MobileNo:''
})

const[displayData,setDisplayData]=React.useState({})

const handleChange=(event)=>{
    setUser({...user,[event.target.name]:event.target.value})
}

const showData=()=>{
  setDisplayData({...user})
  document.getElementById("myform").reset()
}



  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Register User</h2>

        <form id="myform">
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              FirstName:
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your firstname"
              name="name"
              onChange={handleChange}/>

            
          </div>
          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
              LastName:
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your LastName"
              name="LastName"
              onChange={handleChange}/> 
          </div>

          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Address:
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your  address"
              name="Address"
              onChange={handleChange}/>       
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your Email address"
              name="email"
              onChange={handleChange}/>
             </div>

              <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Mobile No:
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your  Mobile no."
              name="mobile no."
              onChange={handleChange}/>  
          </div>
            
          <button type="submit" className="btn btn-outline-primary"onClick={showData}>
            Submit
          </button>
          <button className="btn btn-outline-danger mx-2" to="/">
            Cancel
          </button>
        </form>
      </div>
    </div>
  </div>

);
}