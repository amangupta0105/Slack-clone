import React from 'react'
import GoogleLogin from './GoogleLogin'
import '../../styles/css/Login/LoginBody.css'

const LoginBody = () => {
  return (
    <div className='LoginBody'>
      <h1 className='login-heading'>Sign in to Slack</h1>
      <p className='login-subhedaing'>We suggest using the <span className='bold'>Google address that you use at work.</span> </p>
      <GoogleLogin/>
    </div>
  )
}

export default LoginBody