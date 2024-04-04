import{useState} from 'react'

import './styles/App.css';
import './styles/reset.css'
import { SideMenu } from './components/SideMenu/SideMenu';
import { makeRequest } from './api/api';



function App() {
  return (
    <div className="App">
      <SideMenu></SideMenu>
      <h1>App Works!</h1>
    </div>
  );
}

export default App;
