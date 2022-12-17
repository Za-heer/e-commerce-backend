import React from 'react'
import {FaBars} from "react-icons/fa"
import "./ResNav.css";

const ResNav = () => {
    const foo = ()=>{
        if (foo.className==="ali"){
            foo.className += "responsive";
        }
        // else{
        //     foo.className==="ali";
        // }
    };


  return (
    <>
    <div className="ali  responsive">
        <a href="./home" className='active'>Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Profile</a>
        <a href="javascript:void(0);" className='icon' onClick={foo}><FaBars/></a>
    </div>
    </>
  )
}

export default ResNav