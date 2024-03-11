import React, { useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import {Button} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
import { addDoc } from 'firebase/firestore';
import { channelCollectionRef } from '../../../../service/firestote.config';
import '../../../../styles/css/Chat/AddChannel.css'

const AddChannel = () => {
    const [add, setAdd] = useState(false);
    const [name,setChannelName] = useState('');
    
    function addChannelHandler() {
        setAdd(true);
    }
    
    function channelNameHandler(e){
        e.preventDefault();
        setAdd(false)
        if(name === '') {
            return
        }     
        addDoc(channelCollectionRef,{name})
        .then((response)=>{console.log('Added you Channel with id: -',response.name)})
        .catch(e => console.log(e))

        setChannelName('');
    }

    function cancelHandler(){
        setAdd(false)
    }

    function addNameHandler(e){
        setChannelName(e.target.value)
    }


    return (
        <div className='add-channel'>
            <Button onClick={addChannelHandler}>
                <AddIcon/>
                Add Channel
            </Button>
            {add && 
                <div className='addchannel-form'>
                    <h3>Create a Channel</h3>
                    <form className='addChannelSection'>
                        <label>
                            Name:
                            <input type="text" name="name" value={name} placeholder='# your channel Name' onChange={addNameHandler}/>
                        </label>
                        <div className='button-add-delete'>
                        <Button onClick={cancelHandler} className='cancelButton'>
                           <ClearIcon/>
                        </Button>
                        <Button onClick={channelNameHandler} className='addButton'>
                           ADD <SendIcon/>
                        </Button>
                        </div>

                    </form>
                </div>
            }

        </div>
    )
}

export default AddChannel