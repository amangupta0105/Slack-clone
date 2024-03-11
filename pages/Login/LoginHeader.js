import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/css/Login/LoginHeader.css'

const LoginHeader = () => {
  return (
    <div className='LoginHeader'>
      <div className='hedaer-left'></div>
      <div className='header-middle'>
        <img src='https://a.slack-edge.com/bv1-12/slack_logo-ebd02d1.svg' alt='Slack-Logo'/>
      </div>
      <div className='header-right'>
        <p>New to Slack?</p>
        <NavLink to='/signup'>Create an Account</NavLink>
      </div>
    </div>
  )
}

export default LoginHeader