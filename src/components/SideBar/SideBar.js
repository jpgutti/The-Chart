import React, { useState } from 'react'
import Form from '../Form/Form';
import './Sidebar.css';
import Context from '../Context/context';
import UserSettings from '../UserSettings/UserSettings'

const SideBar = () => {

    const [logged, setLogged] = useState(true)

    return (
      <Context.Consumer>
      {context => (
        <div id="Sidebar">
          {console.log(context)}
          <div className="Stick">
              <div className="Sidebar__Header">
                  <h3>{context.user !== undefined ? "Hey," : "The"}</h3>
                  <h1>{context.user !== undefined ? context.user.name : "Charts"}</h1>
                  <p>Your daily news about anything</p>
                  <hr/>
              </div>
              {context.user !== undefined ?
                <UserSettings/>
                :
                <Form />
              }
          </div>
        </div>
      )}
      </Context.Consumer>
    )
}

export default SideBar