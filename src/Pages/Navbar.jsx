import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./index.css"

const MyNavbar = () => {
  return (
    <>
    <Navbar className='navBar d-flex'>
       <div>
       <Link to=""><h3>LOGO</h3></Link>
       </div>
       <div>
       <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
       </div>
    </Navbar>    
    </>
  )
}

export default MyNavbar