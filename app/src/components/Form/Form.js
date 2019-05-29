import React from 'react';
import './Form.css'

const Form = () => {
    
    return(
        
        <div id="Form">
            <p>SignUp or LogIn for personal configuration</p>
            <div className="Form__Body">
                <input placeholder="E-mail"/>
                <input type="password" placeholder="Password"/>
                <button>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Form