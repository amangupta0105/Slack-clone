import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/css/Login/LoginFooter.css';

const LoginFooter = () => {
  return (
    <div className='LoginFooter'>
      <ul>
        <li> <NavLink to='/privacy'>Privacy & Terms </NavLink> </li>
        <li> <NavLink to='/contact'>Contact Us</NavLink>  </li>
        <li> <NavLink to='/feedback'>Feedback</NavLink>  </li>
      </ul>
    </div>
  )
}

export default LoginFooter