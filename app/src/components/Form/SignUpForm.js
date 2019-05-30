import React, { useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import './Form.css'

const SignUpForm = () => {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});

    async function handleSumbit(){
        setLoading(true)

        const response = await axios.post("//localhost:8080/auth/register", user);

        console.log(response);

        setLoading(false)
        
    }

    return(
        <div id="SignUp">
            <input onChange={(e) => setUser({...user, name: e.target.value})} type="text" placeholder="Name"/>
            <input onChange={(e) => setUser({...user, email: e.target.value})} type="email" placeholder="E-mail"/>
            <input onChange={(e) => setUser({...user, password: e.target.value})} type="password" placeholder="Password"/>
            <button onClick={() => handleSumbit()} className="SumbitBtn">
            {loading ?
                <Loader type="TailSpin" color="#fff" height={20} width={20} />
                :
                "Submit"
            }
            </button>
        </div>
    )
}

export default SignUpForm