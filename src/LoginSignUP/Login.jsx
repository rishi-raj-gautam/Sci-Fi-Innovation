import React from 'react'
import './register.css'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='register'>
        <video autoPlay loop muted className='background-video'>
        <source src='src\LoginSignUP\bg.mp4' type='video/mp4' />
      </video>
      <div className='background-overlay'></div>
      <img src='src\assets\LOGO.png' height={`100px`}></img>
      <h2>Sign In to Sci-Fi</h2>
<form className="form">
    <p className="title">Login </p>
    <p className="message">Signup now and get full access to our website. </p>
            
    <label>
        <input className="input" type="email" placeholder="" required=""/>
        <span>Club Registration ID</span>
    </label> 
        
    <label>
        <input className="input" type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>

    <button className="submit">Submit</button>
    <p className="signin">Do not have an acount ? <Link to='/register'>SignUp</Link> </p>
</form>
    </div>
  )
}

export default Login