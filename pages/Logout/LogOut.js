import React, { useContext } from 'react'
import UserContext from '../../context/UserContext';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

const LogOut = () => {
    const { setUser, navigate} = useContext(UserContext);

    function logoutHandler() {
        localStorage.clear();
        setUser({});
        navigate('/');
    }
    return (
        <div>
            <Button variant='outlined' onClick={logoutHandler} color='error'>
               <LogoutIcon /> Logout
            </Button>
        </div>
    )
}

export default LogOut