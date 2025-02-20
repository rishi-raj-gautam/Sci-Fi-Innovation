import React from 'react'
import './register.css'
// import { Routes,Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
function Register() {
  return (
    <div className='register'>
        {/* <video autoPlay loop muted className='background-video'>
        <source src='src\LoginSignUP\backg.mp4' type='video/mp4' />
      </video> */}
      <div  className='background-video'></div>
      <div className='background-overlay'></div>
      <img src='src\assets\LOGO.png' height={`100px`}></img>
      <h2>Sign In to Sci-Fi</h2>
<form className="form">
    <p className="title">Register </p>
    <p className="message">Signup now and get full access to our website. </p>
        <div className="flex">
        <label>
            <input className="input" type="text" placeholder="" required=""/>
            <span>Firstname</span>
        </label>

        <label>
            <input className="input" type="text" placeholder="" required=""/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input className="input" type="email" placeholder="" required=""/>
        <span>Club Registration ID</span>
    </label> 
        
    <label>
        <input className="input" type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
    <label>
        <input className="input" type="password" placeholder="" required=""/>
        <span>Confirm password</span>
    </label>
    <button className="submit">Submit</button>
    <p className="signin">Already have an acount ? <Link to='/login'>Signin</Link> </p>
</form>
    </div>
  )
}

export default Register