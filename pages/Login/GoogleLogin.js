import React, {useContext} from 'react'
import Button from '@mui/material/Button'
import GoogleIcon from '@mui/icons-material/Google';
import {auth, provider} from '../../service/firebase';
import {signInWithPopup} from 'firebase/auth';
import UserContext from '../../context/UserContext';

const GoogleLogin = () => {
    const {navigate, setUser} = useContext(UserContext);
    const GoogleLoginHandler = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            
            navigate('/main');
        } catch (error) {
            console.log('Error with Google SignUp', error);
        }
    }

    return (
        <div className='GoogleLogin'>
            <Button
                variant="outlined"
                startIcon={<GoogleIcon/>}
                onClick={GoogleLoginHandler}>
                Sign in With Google
            </Button>
        </div>
    )
}
export default GoogleLogin