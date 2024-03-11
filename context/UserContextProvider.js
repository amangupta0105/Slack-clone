import {useEffect, useState} from "react"
import UserContext from "./UserContext"
import {useNavigate} from 'react-router-dom'

const UserContextProvider = ({children}) => {

    const navigate = useNavigate();
    //getting data from local storage and {} to set default value as undefined
    const userFromLocal = JSON.parse(localStorage.getItem('currentUser') || '{}');
    //set user as local data which is set as default - {}
    const [user, setUser] = useState(userFromLocal);

    //set set data to local storage by creating a variable  user 
    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider
            value={{user,setUser,navigate}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;