import React, { useState } from "react";

    function Formuser() {
        const [username, setUsername] = useState("");
        const [age, setAge] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [number, setNumber] = useState("");
        const [identification, setIdentification] = useState("");
        const [userType, setUserType] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();
       
            console.log("User added:", username, age, email, password, number, identification, userType);
          
            setUsername("");
            setAge("");
            setEmail("");
            setPassword("");
            setNumber("");
            setIdentification("");
            setUserType("");
        };

        return (
            <>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Age:
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Number:
                        <input
                            type="text"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Identification:
                        <input
                            type="text"
                            value={identification}
                            onChange={(e) => setIdentification(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        User Type:
                        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                            <option value="">Select User Type</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                    </label>
                    <br />
                    <button type="submit">Add User</button>
                </form>
            </>
        );
    }

    export default Formuser;

   