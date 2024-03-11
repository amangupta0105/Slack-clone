import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import '../../../styles/css/Chat/ChatHeader.css'
import LogOut from '../../Logout/LogOut'

const ChatHeader = () => {
  return (
    <div className='chat-header'>
      <div className='chat-header-left'></div>
      <div className='chat-header-middle'>
        <AccessTimeIcon />
        <div className='search-section'>
          <SearchIcon />
          <input type='text' placeholder='Search user here'  />
        </div>
      </div>
      <div className='chat-header-right'>
        <LogOut />
      </div>
    </div>
  )
}

export default ChatHeader