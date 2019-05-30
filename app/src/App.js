import React, { useEffect, useState } from 'react';
import axios from 'axios'
import SideBar from './components/SideBar/SideBar';
import Dashboard from './components/Dashboard/Dashboard';
import Responsive from 'react-responsive';
import TopBar from './components/TopBar/TopBar';
import Context from './components/Context/context';
import './App.css'

const Desktop = props => <Responsive {...props} minWidth={992} />
const Mobile = props => <Responsive {...props} maxWidth={991} />

const App = () => {

  const [items, setItems] = useState(undefined)
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    
    async function fetchData(){
      
      const data = await axios.get("//localhost:8080/api/stackflow?perPage=24");
  
      const { data: { stack }} = data
      
      setItems(stack);

    }

    fetchData();

  }, [])

  function handleUser(user) {
    console.log("Handling User...");
    setUser(user);
  }

  return (
    <div className="App">
      <Context.Provider value={{
        user: user,
        handleUser: handleUser
      }}>
          <Desktop>
            <SideBar/>
          </Desktop>
          <Mobile>
            <TopBar/>
          </Mobile>
          {items !== undefined ?
            <Dashboard stack={items}/>
            :
            <div className="Loading">Loading...</div>
          }
      </Context.Provider>
    </div>
  )
}

export default App;
