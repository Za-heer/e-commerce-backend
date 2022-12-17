import React from 'react'
import MyNavbar from '../Pages/Navbar'
import { db } from '../Pages/Firebase'
import { getDocs, collection, doc } from 'firebase/firestore'
import { useEffect,useState } from 'react'

const Profile = () => {
    // const [refresh, setRefresh] = useState(false);
    const dbCollection = collection(db ,"users")
    const [arr , setArr]= useState([]);

    useEffect(()=>{
        async function getData(){
            const querySnapshot = await getDocs(dbCollection);
            // console.log(querySnapshot);
            // const arr=[];
            querySnapshot.forEach((doc)=>{
                arr.push({
                    id:doc.id,
                    value: doc.data()
                })
            })
            setArr([...arr]);
        }
        getData();
    },[])
    console.log([...arr])

  return (
    <>
    {/* <MyNavbar/> */}
    <div>
    <h1>Admin Page</h1>
        {
            arr.map((item , i)=>{
                return(
                    <div key ={i} className="mb-5 text-left  data"> 
                        <h2>Name :{item.value.name}</h2>
                        <h2>Email: {item.value.email}</h2>
                        <h2>Contact:{item.value.Contact}</h2>
                        <h2>Place: {item.value.place}</h2>
                        <h2>Seat:{item.value.seat}</h2>
                    
                        </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Profile