import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Button from '@mui/material/Button';
import '../../styles/css/Main/Main.css'
import ChatPage from './ChatPage'



const Main = () => {
  const { user , navigate} = useContext(UserContext);
  function clickHandler() {
    navigate('/');
}
  return (
    <div className='MainPage'>
      {!(user.email === undefined) ? (
        <div>
            <ChatPage />         
        </div>
      ) : (
        <div className='login-prompt'>
          <p>Please log in – it's very simple!</p>
          <Button variant="outlined" color="error" onClick={clickHandler}>
            Redirect Me to Login Page
          </Button>
        </div>
      )}
    </div>
  );
};

export default Main;
