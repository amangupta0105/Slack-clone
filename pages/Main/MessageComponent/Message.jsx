import React, { useContext, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import GetMessage from './GetMessage.jsx';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { messageCollectionRef } from '../../../service/firestote.config.js';
import UserContext from '../../../context/UserContext.js';
import '../../../styles/css/Message/Message.css'
import ChannelContext from '../../../context/ChannelContext.js';

const Message = () => {

  const [message,setMessage] = useState('');
  const {user} = useContext(UserContext);
  const {channelId} = useContext(ChannelContext);

  function messageInputHandler(e){
   setMessage(e.target.value) 
  }
  
  async function sendMessageHandler(e){
    e.preventDefault();
    if (message === '') {
      return
    }

    try {
        await addDoc(messageCollectionRef,{
          emailId: user.email,
          message: message,
          userName: user.displayName,
          userImg: user.photoURL,
          channelId: channelId,
          //setTimestamp() ==> predefined tag
          time: serverTimestamp()
        }).then(console.log('Message added')).catch((e)=>{console.log(e)});  
        setMessage('')

    } catch (error) {
      console.error('Error adding message:', error.message);
    }

  }

  return (
    <div className='message-block'>
      <div className='message-input'>
        <form className='input-message'>
          <input type='text' placeholder='Message here..' value={message} onChange={messageInputHandler}/>
          <Button variant="contained" endIcon={<SendIcon />} className='send-button' onClick={sendMessageHandler} >
          Send
        </Button>
        </form>
      </div>
      <div className='messages'>
        {/* {!selectedId && <GetMessage/>} */}
        {<GetMessage channelId={channelId} />}
      </div>
    </div>
  )
}

export default Message