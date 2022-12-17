import axios from 'axios';
import React, { useState } from 'react'

function AddUser() {
    const [title,setTitle] = useState();
    const [price,setPrice] = useState();
    const [disc,setDisc] = useState();
    
    const CreateUser=()=>{
        axios
        .post("http://localhost:5000/product/postdata",{
            title,
            price,
            disc
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err.message)
        })
    }
    
   
    
  return (
    <>
    <div className="main py-5">
    <div className="v py-3">
    <input onChange={(e)=>{setTitle(e.target.value)}} type="text"placeholder='enter title' />
    </div>
    <div className="v py-3">
    <input onChange={(e)=>{setPrice(e.target.value)}} type="number"placeholder='enter price' />
    </div>
    <div className="v py-3">
    <input onChange={(e)=>{setDisc(e.target.value)}} type="text"placeholder='enter discription' />
    </div>
    <button onClick={CreateUser}>Create user</button>
    </div>
    </>
  )
}

export default AddUser