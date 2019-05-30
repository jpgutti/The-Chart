import React, { useEffect, useState } from 'react';
import axios from 'axios'
import SideBar from './components/SideBar/SideBar';
import Dashboard from './components/Dashboard/Dashboard';
import Responsive from 'react-responsive';
import TopBar from './components/TopBar/TopBar';
import './App.css'

const Desktop = props => <Responsive {...props} minWidth={992} />
const Mobile = props => <Responsive {...props} maxWidth={991} />

const App = () => {

  const [items, setItems] = useState(undefined)

  useEffect(() => {
    async function fetchData(){
      const data = await axios.get("//localhost:8080/api/stackflow?perPage=12");
  
      const { data: { stack }} = data
      
      setItems(stack);
    }

    fetchData();

  }, [])

  console.log(items)

  return (
    <div className="App">
      <Desktop>
        <SideBar/>
      </Desktop>
      <Mobile>
        <TopBar/>
      </Mobile>
      {items !== undefined ?
        <Dashboard stack={items}/>
        :
        "Loading..."
      }
    </div>
  );
}

export default App;
