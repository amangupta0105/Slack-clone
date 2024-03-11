import React from 'react'
import ChatSection from './Chat/ChatSection'
import ChatHeader from './Chat/ChatHeader'
import ChatSideBar from './Chat/ChatSideBar'
import ChannelContextProvider from '../../context/ChannelContextProvider'
import '../../styles/css/Chat/ChatPage.css'

const ChatPage = () => {

    return (
        <div className='chat-page'>
            <ChatHeader/>
                <div className='chat-main'>                
                        <ChannelContextProvider>
                            <ChatSideBar />
                            <ChatSection /> 
                        </ChannelContextProvider>                                             
                </div>                
        </div>
    )
}

export default ChatPage