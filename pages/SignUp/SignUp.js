import React, { useContext } from 'react'
import UserContext from '../../context/UserContext';
import Button from '@mui/material/Button';
import '../../styles/css/SignUp/SignUp.css'

const SignUp = () => {
    const {navigate} = useContext(UserContext);
    function clickHandler(){
        navigate('/');
    }
    return (
        <div className='SignUpPage'>
            <div>Login with Google is Avilable Only !!!</div>
            <Button variant="outlined" color="error" onClick={clickHandler}>
            Redirect Me to Login Page
          </Button>
        </div>
    )
}

export default SignUp