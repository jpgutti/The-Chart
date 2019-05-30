import React, { useEffect, useState } from 'react'
import Form from '../Form/Form';
import './Sidebar.css'
import UserSettings from '../UserSettings/UserSettings'


const SideBar = () => {

    const [logged, setLogged] = useState(true)

    return (
      <div id="Sidebar">
        <div className="Stick">
            <div className="Sidebar__Header">
                <h3>{logged ? "Hey," : "The"}</h3>
                <h1>{logged ? "João Pedro" : "Charts"}</h1>
                <p>Your daily news about anything</p>
                <hr/>
            </div>
            <Form/>
            {logged &&
              <UserSettings/>
            }
        </div>
      </div>
    )
}

export default SideBar