import React, { useState } from 'react'
import { db } from '../Pages/Firebase';
import {
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
  } from "firebase/firestore";
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';

const MainScreen = () => {
    const [name, setName ]= useState("");
    const [email, setEmail ]= useState("");
    const [number, setNumber ]= useState("");
    const [contact, setContact ]= useState("");
    const [place, setPlace ]= useState("");
    const navigate = useNavigate();

    const dbCollection = collection(db, "users");

    const addData=async ()=>{
        const obj =  {
            name: name,
            email: email,
            Contact: contact,
            seat: number,
            place:place,
        }
        const addData =  await addDoc(dbCollection,obj)
        console.log(obj)
    }
    
    const submit = (e)=>{
        e.preventDefault();
        console.log(name, email, number, contact,place);
        navigate("/profile")
            addData();
        }
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 shadow">
                <h3>Welcome</h3>
                <form onSubmit={submit}>
                <input type="text" placeholder='Enter your Name' onChange={(e)=> setName(e.target.value)} className="mb-5 mt-3 w-75 p-2"/> <br/>
                <input type="email" placeholder='Enter your Email' onChange={(e)=> setEmail(e.target.value)} className="mb-5 w-75 p-2" /><br/>
                <input type="number" placeholder='Enter your contact numbar' onChange={(e)=> setContact(e.target.value)} className="mb-5 w-75 p-2" /><br/>
                <input type="number" placeholder='Seat' onChange={(e)=> setNumber(e.target.value)} className="mb-5 w-75 p-2" /><br/>
                <input type="text" placeholder='Place' onChange={(e)=> setPlace(e.target.value)} className="mb-5 w-75 p-2" /><br/>
                <button value="submit" className="bg-info w-75 rounded mb-3 p-2" >
                    Submit
                </button>
                </form>
            </div>
            <div className="col-md-4"></div>
        </div>
    </div>
    </>
  )
}

export default MainScreen