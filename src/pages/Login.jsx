import axios from 'axios'
import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from '../components/Loader'
// import Loader from '../components/Loader'

const Login = () => {
  let[user,setUser]=useState({email:'',password:''})
  let [isLoading,setIsLoading]=useState(false)
  let [errors,setErrors]=useState({});
    const redirect=useNavigate()
  let validations=(user)=>{
      let formerrors={}
      let pattern=/^([a-zA-Z0-9_\!\@\#\$\%\^\&\*\-\.]+)\@([a-zA-Z_0-9]+)\.([a-zA-Z]{3})$/
      if(user.email==''){formerrors.emailerr="email is required"  }
      else if(!pattern.test(user.email)){  formerrors.emailerr="invalid email"  }
      if(user.password==''){formerrors.pwderr="password is required"}
      return formerrors }

  let handleSubmit=async(e)=>{
      e.preventDefault()
      let myerrors=validations(user)
      if(Object.keys(myerrors).length==0){
          setErrors({})
          setIsLoading(true)
            try{
                let res=await axios.get(`https://65d5b57af6967ba8e3bc4c08.mockapi.io/first?email=${user.email}`)
                if(res.data[0].password==user.password){
                    let obj={username:res.data[0].username,email:res.data[0].email,role:res.data[0].role,isLoggedIn:true}
                       sessionStorage.setItem('user',JSON.stringify(obj))
                       toast.success("loggedIn Successfully")
                       if(res.data[0].role=="admin")
                             redirect('/admin')
                       else if(res.data[0].role=="user")
                                 redirect('/')      
                        setIsLoading(false)                                    
                }
                else {
                    toast.error("invalid credentials")
                    setIsLoading(false)
                }
            }
            catch(err){toast.error("invalid credentials")}
        }
      else 
          setErrors(myerrors)
  }
  return (
    <Container className='shadow mt-5'>
        {isLoading && <Loader/>}
    <h1>Login Page</h1><hr/>
<Row>
    <Col xs={6}>
        <Image src="/src/assets/login.png" fluid/>
    </Col>
    <Col xs={6}>
        <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
            </Form.Group>
            {errors.emailerr && <span className='text-danger'>{errors.emailerr}</span>}
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
            </Form.Group>
            {errors.pwderr && <span className='text-danger'>{errors.pwderr}</span>}<br/>
            <Button variant='danger' className='mt-2' type="submit">Submit</Button>
        </Form>
        <p>Create an account?? <Link to='/signup'>Register</Link></p>
    </Col>
</Row>
</Container>
  )
}

export default Login
