import React, { useContext } from 'react'
import '../../../styles/css/Chat/ChatSection.css'
import InfoIcon from '@mui/icons-material/Info';
import Message from '../MessageComponent/Message';
import ChannelContext from '../../../context/ChannelContext';

const ChatSection = () => {

  const {channelName} = useContext(ChannelContext);

  return (
    <div className='chatSection'>
      <div className='chat-section-header'>
        <div className='channel-listname'>
          
        # {channelName ? channelName :'General'}
        </div>
        <div className='details'>
          <InfoIcon/>Details
        </div>
      </div>
      <div className='message-section'>
        <Message/>
      </div>
    </div>
  )
}

export default ChatSection