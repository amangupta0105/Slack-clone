import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LoginPage from './Login/LoginPage'
import SignUp from './SignUp/SignUp'
import Privacy from './Login/Footer/Privacy'
import Contact from './Login/Footer/Contact'
import Feedback from './Login/Footer/Feedback'
import Main from './Main/Main'

const NavBar = () => {
  return (
    <div>
      <Routes>
        <Route path ='/' element = {<LoginPage/>}/>
        <Route path='/signup' element ={<SignUp />} />
        <Route path='/privacy' element ={<Privacy />} />
        <Route path='/contact' element ={<Contact />} />
        <Route path='/feedback' element ={<Feedback/>} />
        <Route path='/main' element ={<Main/>} />
      </Routes>
    </div>
  )
}

export default NavBar