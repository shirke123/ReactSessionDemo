import React ,{useMemo}from 'react'
import { useState } from "react";

export default function Search() {
  
   
    const[text,setText]=React.useState('')
    const[search,setSearch]=React.useState('')
    const [inputList, setInputList] = useState([]);


    const users=[{
        id:1,
        name:'John',
    },{
        id:2,
        name:'Peter'
    },{
        id:3,
        name:'Richard'
    }]

    const onChange=(event)=>{
        setText(event.target.value)
    }

    const searchData=()=>{
        setSearch(text)
    }

    const filteredData=useMemo(()=>
        users.filter((user)=>{
            console.log('hiiiiiiii');
            return user.name.includes(search)
        })
    ,[search])

    const Input = () => {
        return <input placeholder="from open" />;
      };
    const onAddBtnClick = event => {
        setInputList(inputList.concat(<Input key={inputList.length} />));
      };



    
    return( 
     <div>
        <br/>
           <input
              type={"text"}
              onChange={onChange}
            />
          <button type="submit" className="btn btn-outline-primary" onClick={searchData}>
            Search
          </button><br/>
           {/* <DisplayData userList={filteredData}/> */}

           {/* <button type="button"onClick={onAddBtnClick} >Add</button>
           {inputList} */}

          </div>
    )
}

function DisplayData({userList}){

    return(
        <div>
            <ul>
                {
                   userList && userList.map((user)=>(
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
    
  