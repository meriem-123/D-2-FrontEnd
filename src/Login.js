import React,{useEffect, useRef} from 'react'
import {Link,NavLink,useHistory} from "react-router-dom"
import './Login.css'
import gsap from 'gsap'
import {useState} from "react";

import usePLoader from './usePLoader';

const Login = ()=> {
  const [loader, showLoader, hideLoader] = usePLoader()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(false);

  const history = useHistory()
  useEffect(()=>{
    if (localStorage.getItem('user-info')){
      history.push("/homePage")
    }
  },[])

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

  async function login() {

    showLoader()

    let item = {
      email, 
      password
    }
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers:{
        "content-type":"application/json",
        "Accept":"/"
      },
      body:JSON.stringify(item)
    });
    result = await result.json();
    let resultString = JSON.stringify(result);
    let error = "{\"error\":\"Email or password is not matched\"}"
    console.log("are not equal")
    if(resultString !== error) {
      console.log(result)
      localStorage.setItem("user-info", JSON.stringify(result))
      localStorage.setItem("user_id",result.id)
      
      console.log(localStorage.getItem("user_id"))
      history.push('/homepage')
    }
    else {
      setErrorMessage("Login invalid ! ")
      console.log("khtiti f login")
    }
    hideLoader()

  }

  return (
    <div className="inner">
      <div className="headerr">
      <NavLink className="head" to="/" exact>Home</NavLink>
      <NavLink className="head" to="/login" exact activeStyle={{fontWeight:"bold",color:"#fada5f"}}>Login</NavLink>
      <NavLink className="head" to="/signIn" exact activeStyle={{fontWeight:"bold",color:"#fada5f"}}>SignUp</NavLink>
    </div>
    <div className="container1">
      <div className="page1">
    
    <h1 className="page-title">
      <div className="line-wrap">
        <div ref={el => line1 = el} className="line ">
          One of Us Already
        </div>
      </div>
      <div className="line-wrap">
        <div ref={el => line2 = el} className="line line2">
          We missed you.
        </div>
      </div>
    </h1>
    </div>
    <div>
      <div ref={el => form = el} className="info1">
        <div class="login-form">
     <div class="form-group ">
       <input 
          type="text" 
          class="form-control" 
          placeholder="Email" 
          id="UserName" 
          onChange={(e)=>setEmail(e.target.value)}
          />
     </div>
     <div class="form-group log-status">
       <input 
          type="password" 
          class="form-control" 
          placeholder="Password" 
          id="Password"
          onChange={(e)=>setPassword(e.target.value)}
          />
     </div>
      <a class="link" href="#">Lost your password?</a>
     <button 
        type="button" 
        class="log-btn" 
        onClick={login}
        >Log in</button>
        {errorMessage && <div className="error"> {errorMessage} </div>}
   </div>
      </div>
    </div>
    </div>
    {loader}
    </div>
  )
}

export default Login
