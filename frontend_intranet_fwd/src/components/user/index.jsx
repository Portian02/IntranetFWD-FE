
import Signup from "../signup";
import Login from "../login";
import Logout from "../logout";
import { useState } from "react";
import PrivateText from "../privateText";
// import {fetchCurrentUser}  from '../../services/ApiService'

const User = ({currUser, setCurrUser}) => {
    const [show, setShow]=useState(true)

    // Verificar el almacenamiento local para una sesión cuando el componente se monta
    // useEffect(() => {
    //     const sessionId = localStorage.getItem('Token');
    //     if (sessionId) {
    //         // Si existe una sesión, usarla para establecer currUser
    //         // Esto es un marcador de posición; reemplázalo con una llamada a tu API
    //         fetchCurrentUser(sessionId).then(user => setCurrUser(user));
    //     }
    // }, []);

    
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
                {/* // :
                // <Signup setCurrUser={setCurrUser}  setShow={setShow} /> */}
            
        </div>
    )
}
export default User