import React,{useEffect, useRef} from 'react'
import {Link,NavLink,useHistory} from "react-router-dom"
import './Login.css'
import gsap from 'gsap'
import {useState} from "react";
import usePLoader from './usePLoader';

const SignUp = () => {

  useEffect(()=>{
    if (localStorage.getItem('user-info')){
      history.push("/homePage")
    }
  },[])
  const [loader, showLoader, hideLoader] = usePLoader()
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const history = useHistory()

  async function regiter() {
    showLoader()
    let item = {
      name, password, email
    }
    let result = await fetch("http://localhost:8000/api/register", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": '*/*'
      }
    })
    result = await result.json()
    localStorage.setItem("user_id",result.id)
    localStorage.setItem("user-info", JSON.stringify(result))
    history.push("/homePage")
    hideLoader()
  }

  let line1= useRef(null);
  let line2= useRef(null);
  let form= useRef(null);


  useEffect(()=>{
    gsap.from([line1,line2],0.8,{
      delay:0.8,
      ease:"power3.out",
      y:64,
      stagger:{
        amount:0.15
      }
    })
    gsap.from(form,1,{
      delay:1.3,
      ease:"power3.out",
      x:1000,
      stagger:{
        amount:0.15
      }
    })
  },[line1,line2])
  return (
    <div className="inner">
      <div className="headerr">
      <NavLink className="head" to="/" exact activeStyle={{fontWeight:"bold",color:"#fada5f"}}>Home</NavLink>
      <NavLink className="head" to="/login" exact activeStyle={{fontWeight:"bold",color:"#fada5f"}}>Login</NavLink>
      <NavLink className="head" to="/signIn" exact activeStyle={{fontWeight:"bold",color:"#fada5f"}}>SignUp</NavLink>
    </div>
    <div className="container1">
      <div className="page1">
      
    <h1 className="page-title">
      <div className="line-wrap">
        <div ref={el => line1 = el} className="line">
          Hello, New here ?
        </div>
      </div>
      <div className="line-wrap">
        <div ref={el => line2 = el} className="line line2">
          Join Us Now.
        </div>
      </div>
    </h1>
    
    </div>
    <div>
      <p  ref={el => form = el}  className="info1">
      <div className="login-form">
     
     <div className="form-group ">
       <input type="text"       
          className="form-control" 
          placeholder="Username " 
          id="UserName" 
          value={name}
          onChange = {(e)=>setName(e.target.value)}
          />
       
     </div>
     <div className="form-group ">
       <input type="text" 
              className="form-control" 
              placeholder="Email " 
              id="Email"
              value={email}
              onChange = {(e)=>setEmail(e.target.value)} 
      />
      </div>
     <div className="form-group log-status">
        <input type="password" 
              className="form-control" 
              placeholder="Password" 
              id="Password"
              value={password}
              onChange = {(e)=>setPassword(e.target.value)}
        />
       
     </div>
      
      <a className="link" href="#">Lost your password?</a>
     <button type="button" className="log-btn" onClick={regiter} >Sign up</button>
     </div>

      </p>

    </div>
    </div>

    {loader}
    </div>
  )
}

export default SignUp
