import React, { useState } from 'react'; 
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { Tabs, Tab } from '@material-ui/core';
import './Form.css'

const Form = () => {

    const [activeTab, setActiveTab] = useState(0)

    function handlerTabChange(e, value){
        setActiveTab(value);
    }
    
    return(
        
        <div id="Form">
            <p>SignUp or LogIn for personal configuration</p>
            <div className="Form__Body">
                <Tabs 
                    value={activeTab}
                    onChange={handlerTabChange}
                    variant="fullWidth"
                >
                    <Tab label="Login" />
                    <Tab label="Sign Up" />
                </Tabs>
                {activeTab === 0 ?
                    <LoginForm/>
                    :
                    <SignUpForm/>
                }
            </div>
        </div>
    )
}

export default Form