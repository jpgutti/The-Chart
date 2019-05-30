import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import './Form.css'

const LoginForm = () => {
    
    const [loading, setLoading] = useState(false)

    return(
        <div id="Login">
            <input placeholder="E-mail"/>
            <input type="password" placeholder="Password"/>
            <button className="SumbitBtn">
            {loading ?
                <Loader type="TailSpin" color="#fff" height={20} width={20} />
                :
                "Login"
            }
            </button>
        </div>
    )
}

export default LoginForm