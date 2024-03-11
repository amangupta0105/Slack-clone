import React, {useContext} from 'react'
import UserContext from '../../../context/UserContext'
import EditIcon from '@mui/icons-material/Edit';
import PanoramaFishEyeRoundedIcon from '@mui/icons-material/PanoramaFishEyeRounded';
import '../../../styles/css/Chat/ChatSideBar.css'
import MessageIcon from '@mui/icons-material/Message';
import SaveIcon from '@mui/icons-material/Save';
import PeopleIcon from '@mui/icons-material/People';
import AppsIcon from '@mui/icons-material/Apps';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import AddChannel from './Channel/AddChannel';
import ChannelList from './Channel/ChannelList';
import ChannelContext from '../../../context/ChannelContext';


const ChatSideBar = () => {

    const {user} = useContext(UserContext);
    const {setChannelName,setChannelId} = useContext(ChannelContext);

    return (
        <div className='chat-sidebar'>
            <div className='user-info'>
                <div className='user'>
                    <h3>{user.displayName}</h3>
                    <EditIcon/>
                </div>
                <div className='online-user'>
                    <PanoramaFishEyeRoundedIcon fontSize='smaller'/> {user.displayName}
                </div>
            </div>
            <hr/>
            <div className='fixed-channel'>
                <p id="general" onClick={()=>{setChannelName(''); setChannelId('')}}>
                    <MessageIcon/>
                    Thread</p>
                <p id='mention' onClick={()=>{setChannelName(''); setChannelId('')}} >
                    <AddReactionIcon/>
                    Mentions & reaction</p>
                <p id='save' onClick={()=>{setChannelName(''); setChannelId('')}}>
                    <SaveIcon/>
                    Saved items</p>
                <p id='browser' onClick={()=>{setChannelName(''); setChannelId('')}} >
                    <FolderOpenIcon/>
                    Channel browser</p>
                <p id='people' onClick={()=>{setChannelName(''); setChannelId('')}} >
                    <PeopleIcon/>
                    People & user groups</p>
                <p id='apps' onClick={()=>{setChannelName(''); setChannelId('')}} >
                    <AppsIcon/>
                    Apps</p>
                <p id ='file' onClick={()=>{setChannelName(''); setChannelId('')}}>
                    <FindInPageIcon/>
                    File browser</p>
            </div>
            <hr/>
            <div className='add-channel'>
                <AddChannel/>
            </div>
            <hr/>
            <div className='channel-list'>
                <ChannelList/>
            </div>
            <hr/>
        </div>
    )
}

export default ChatSideBar