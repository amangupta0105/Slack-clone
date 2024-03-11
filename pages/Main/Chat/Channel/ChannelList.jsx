import React, { useContext, useEffect, useState } from 'react'
import { channelCollectionRef } from '../../../../service/firestote.config'
import { deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import ChannelContext from '../../../../context/ChannelContext'
import '../../../../styles/css/Chat/ChannelList.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { db } from '../../../../service/firebase'
import EditIcon from '@mui/icons-material/Edit';
import {Button} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
// import { useNavigate } from "react-router-dom";

const ChannelList = () => {

  const {channelList,setChannelList,setChannelId,setChannelName,setselectedId} = useContext(ChannelContext);
  const [editView,setChannel] = useState(false);
  const [newName,setNewName] = useState('');
  const [userId,setUserId] =useState('');
  // const nav = useNavigate();


  function deleteHandler(id){
    // to get reference for doc 
    const channelRef = doc(db,'channel',id);
    deleteDoc(channelRef).then(()=>{console.log('Channel Deleted',id)}).catch((e)=>{console.log(e)})
  }

    useEffect(() => {
        const unsub = onSnapshot(channelCollectionRef,snapshot=>{
            const data =snapshot.docs.map((doc)=>({
                id:doc.id,
                name:doc.data().name
            }))            
            setChannelList(data);
        })
      return () => {
        unsub()
      }
    }, [])

    function editHandler(id){
      setChannel(true)
      setUserId(id);
      }
    function cancelHandler(){
      setChannel(false)
    }
    function changeChannelNameHandler(e){
      setNewName(e.target.value)
    }
    function setNewChannelNameHandler(e){
      e.preventDefault();
      setChannel(false)
      if(newName === ''){
        return
      }
      const channelRef = doc(db,'channel',userId);
      //name: new name ==> when key and value are different
      updateDoc(channelRef,{name: newName}).then(()=>console.log('Updated')).catch((e)=>console.log(e))
      setNewName('');
    }
    function seletedChannel(id,name){
      console.log('Channel Selected',id,name); 
      setChannelId(id);
      setChannelName(name);
      setselectedId(id);
    }

  return (
    <div>
        {
            channelList.map((channel)=>(
              <div key={channel.id} className='channel-list'>
                  <div className='channel-name'>
                    <p onClick={()=> {seletedChannel(channel.id,channel.name)}}>
                      # {channel.name}
                    </p>
                  </div>
                  <div className='edit-channel' onClick={()=>editHandler(channel.id)}>
                    <EditIcon/>
                  </div>
                  <div className='delete-channel' onClick={()=>deleteHandler(channel.id)}>
                      <DeleteIcon />
                  </div>
              </div>  
            ))
        }

        {/* edit screen */}
        {editView && <div className='editChannel-form'>
          <h3>Enter new Channel's Name:-</h3>
            <form className='editChannelSection'>
              <label>
                Name:
                <input type="text" name="newname" value={newName} placeholder='New channel Name' onChange={changeChannelNameHandler}/>
              </label>
              <div className='button-edit-delete'>
                <Button onClick={cancelHandler} className='cancelButton'>
                  <ClearIcon/>
                </Button>
                <Button className='editButton' onClick={setNewChannelNameHandler}>
                  Done <SendIcon/>
                </Button>
              </div>

            </form>
          </div>
       }
       
    </div>
  )
}

export default ChannelList