import React, { useEffect, useState } from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {FaArrowAltCircleLeft, FaHome, FaListAlt, FaLock, FaPenAlt, FaShoppingCart} from 'react-icons/fa'
import { ShowOnLogin, ShowOnLogout } from './HiddenLinks';
import { toast } from 'react-toastify';
const Header = () => {
  const navigate=useNavigate()
  let [username,setUsername]=useState('')
  useEffect(()=>{
    if(sessionStorage.getItem("user") != null){
      let obj=JSON.parse(sessionStorage.getItem("user"))
      setUsername(obj.username)
    }
     },[sessionStorage.getItem("user")])

  let handleClick=()=>{
    sessionStorage.removeItem("user")
    toast.success("loggedOut successfully")
    navigate('/')
  }
  return (
    <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">Next.In</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'><FaHome/> Home</Nav.Link>
            <Nav.Link as={Link} to='/products'><FaListAlt/>Products</Nav.Link>
          </Nav>
          <Nav>
            <ShowOnLogout>
                <Nav.Link as={Link} to='/signup'><FaPenAlt/>Register</Nav.Link>
                <Nav.Link as={Link} to='/login'><FaLock/>Login</Nav.Link>
            </ShowOnLogout>
            <ShowOnLogin>
              <Nav.Link as={Link} to='/cart'><FaShoppingCart size={30}/> 
                    <span  class="badge rounded-pill text-bg-danger">0</span>                    
              </Nav.Link>
                <Nav.Link> {username}</Nav.Link>
                <Nav.Link onClick={handleClick}><FaArrowAltCircleLeft/>Logout</Nav.Link>
            </ShowOnLogin>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Header
