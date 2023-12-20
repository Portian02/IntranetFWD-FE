import { useRef } from "react"
const Signup=({setCurrUser, setShow})=>{
    const formRef = useRef()
    const signup=async (userInfo, setCurrUser)=>{
        const url="http://localhost:3001/signup"
        try{
            const response=await fetch(url, {
                method: 'post',
                headers: {
                    "content-type": 'application/json',
                    "accept": "application/json"
                },
                body: JSON.stringify(userInfo)
            }) 
            const data=await response.json()
            console.log("Soy Data", data)
            if(!response.ok) throw data.error
            localStorage.setItem('token', response.headers.get("Authorization"))
            setCurrUser(data)
        } catch (error){
            console.log("error", error)
        }
    }
    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData(formRef.current)
        const data=Object.fromEntries(formData)
        const userInfo={
            "user":{username: data.username,  email: data.email, password: data.password, repeatpassword: data.repeatpassword }
        }
        signup(userInfo, setCurrUser)
        e.target.reset()
    }
    const handleClick=e=>{
        e.preventDefault()
        setShow(true)
    }
    return(
        <div>
        <form ref={formRef} onSubmit={handleSubmit}>
            UserName: <input type="name" name='name' placeholder="name" />
            <br/>
            Email: <input type="email" name='email' placeholder="email" />
            <br/>
            Password: <input type="password" name='password' placeholder="password" />
            <br/>
            RepeatPassword: <input type="repeatpassword" name='repeatpassword' placeholder="repeaPpassword" />
            <br/>
            <input type='submit' value="Submit" />
        </form>
        <br />
        <div>Already registered, <a href="#login" onClick={handleClick} >Login</a> here.</div>
    </div>
    )
}
export default Signup