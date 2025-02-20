import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Events from './Events'
import Team from './Team'
import Footer from './Footer'
import { Routes,Route } from 'react-router-dom'
import MoreTeam from './MoreTeam'
import { Analytics } from '@vercel/analytics/react';
import Register from './LoginSignUP/Register'
import Login from './LoginSignUP/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    
      <Route path='/' element={<><Navbar/>
      <Home/>
      <About/>
      <Events/>
      <Team/>
      <Footer/>
      </>
      } />
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/moreteam' element={<MoreTeam/>}/>
    </Routes> 
    <Analytics />
    </>
  )
}

export default App
