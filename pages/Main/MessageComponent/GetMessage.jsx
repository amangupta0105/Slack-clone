import React, {  useEffect, useState } from 'react'
import {deleteDoc, doc, onSnapshot,orderBy,query,where} from 'firebase/firestore'
import { messageCollectionRef } from '../../../service/firestote.config';
import '../../../styles/css/Message/GetMessage.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { db } from '../../../service/firebase';

const GetMessage = ({channelId}) => {

    const [messages,setMessages] = useState([]);
    //from google query
    const orderedQuery = query(messageCollectionRef,where('channelId', '==', channelId), orderBy('time', 'asc'));
    const localUser = JSON.parse(localStorage.getItem('currentUser'));
    
    useEffect(() => {
        const unsub = onSnapshot(orderedQuery,snapshot=> {
            const data = snapshot.docs.map((doc)=>{
                //to convert timestamp
                const timestamp = doc.data().time?.toDate();
                const formattedTime = timestamp ? timestamp.toLocaleString() :'No timestamp available';
                return {
                id:doc.id,
                emailId: doc.data().emailID,
                message:doc.data().message,
                time: formattedTime,
                userName:doc.data().userName,
                userImg:doc.data().userImg                    
                }
            })
            setMessages(data);
        })
      return () => {
        unsub()
      }
    }, [messages])
    
    function deleteMessageHandler(id){
        const msgRef = doc(db,'chat',id);
        deleteDoc(msgRef).then(()=>'deleted msg',id).catch(e => console.log(e.message));
    }

  return (
    <div className='message-lists'>
        {messages.map((msg)=> {return(
            <div className='message-box' key={msg.id}>
                    <div>
                        <div className='msg-sub-block'>
                            <div className='user-pic'>
                                <img src={msg.userImg} alt='user-sakal'/>
                            </div>
                            <div className='msg-details'>
                                <div className='user-name'>
                                <p>{msg.userName}</p>
                                </div>
                                <div className='time'>
                                    {msg.time}
                                </div>
                                <div className='message'>
                                    {msg.message}
                                </div>     
                            </div>
                        </div>                
                    </div>
                    {msg.userName === localUser.displayName && 
                    <div className='msg-delte' onClick={()=>deleteMessageHandler(msg.id)}>
                        <DeleteIcon />
                    </div> 
        }
            </div>
        )})}
    </div>
  )
}

export default GetMessage