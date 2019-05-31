import React, { useEffect, useState } from 'react';
import axios from 'axios'
import SideBar from './components/SideBar/SideBar';
import Dashboard from './components/Dashboard/Dashboard';
import Responsive from 'react-responsive';
import Snackbar from '@material-ui/core/Snackbar';
import TopBar from './components/TopBar/TopBar';
import Context from './components/Context/context';
import './App.css'

const Desktop = props => <Responsive {...props} minWidth={992} />
const Mobile = props => <Responsive {...props} maxWidth={991} />

const App = () => {

  const [items, setItems] = useState(undefined)
  const [user, setUser] = useState(undefined)
  const [snack, setSnack] = useState({
    open: false,
    horizontal: "center",
    vertical: "top"
  })

  const [error, setError] = useState(undefined)

  useEffect(() => {
    
    async function fetchData(){
      
      const data = await axios.get(process.env.REACT_APP_API_URL + "/api/stackflow?perPage=28");
  
      const { data: { stack }} = data
      
      setItems(stack);
      

    }

    fetchData();

  }, [])

  function handleClose(){
    setSnack({ ...snack, open: false})
    setError(undefined)
  }

  function handleUser(user) {
    console.log("Handling User...");
    setUser(user);
  }

  return (
    <div className="App">
      <Context.Provider value={{
        user: user,
        error: error,
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
          <Snackbar
            className="SnackBar"
            anchorOrigin={{ vertical: snack.vertical, horizontal: snack.horizontal }}
            key={`${snack.vertical},${snack.horizontal}`}
            open={error !== undefined ? true : false}
            onClose={handleClose}
            ContentProps={{
            'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">teste snack</span>}
          />
      </Context.Provider>
    </div>
  )
}

export default App;
