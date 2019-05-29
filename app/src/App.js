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

  return (
    <div className="App">
      <Desktop>
        <SideBar/>
      </Desktop>
      <Mobile>
        <TopBar/>
      </Mobile>
      <Dashboard/>
    </div>
  );
}

export default App;
