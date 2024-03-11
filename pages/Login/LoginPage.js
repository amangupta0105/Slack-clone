import React from 'react'
import LoginBody from './LoginBody'
import LoginFooter from './LoginFooter'
import LoginHeader from './LoginHeader'
import '../../styles/css/Login/LoginPage.css'

const LoginPage = () => {
  return (
    <div className='LoginPage'>
        <LoginHeader/>
        <LoginBody/>
        <LoginFooter/>
    </div>
  )
}

export default LoginPage