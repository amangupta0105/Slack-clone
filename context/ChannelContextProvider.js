import { useState ,useEffect} from "react"
import ChannelContext from "./ChannelContext"

const ChannelContextProvider = ({children}) => {

    const [channelList,setChannelList] = useState([]);
    const [channelId,setChannelId] = useState('');
    const [channelName,setChannelName] = useState('');

    //getting data from local storage and {} to set default value as undefined
    const idFromLocal = JSON.parse(localStorage.getItem('seletedId') || '{}');
    //set user as local data which is set as default - {}
    const [seletedId, setselectedId] = useState(idFromLocal);

    //set set data to local storage by creating a variable  user 
    useEffect(() => {
        localStorage.setItem('selectedId', JSON.stringify(seletedId));
    }, [channelId]);

       return (
        <ChannelContext.Provider
            value={{channelList,setChannelList,channelId,setChannelId,channelName,setChannelName,setselectedId,seletedId}}>
            {children}
        </ChannelContext.Provider>
    )
}

export default ChannelContextProvider;