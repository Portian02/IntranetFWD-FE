
import Login from "../login";
import Logout from "../logout";
import { useState } from "react";
import PrivateText from "../privateText";

const User = ({currUser, setCurrUser}) => {
    const [show, setShow]=useState(true)

 

    
    if(currUser) 
        return (
            <div>
            Hello Welcome {currUser.username}
            <PrivateText currUser={currUser}/>
            <Logout setCurrUser={setCurrUser}/> 
            </div>
        )
        
    return (
        <div>                                             
            <Login setCurrUser={setCurrUser} setShow={setShow}/> 
        </div>
    )
}
export default User