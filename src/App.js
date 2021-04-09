import React from 'react';
import Container from './components/container';
import './App.css';


const App=()=>{

  return <div  style={{marginTop:'100px',marginLeft:'450px', marginRight:'450px',padding:'42px',backgroundColor:'lightgray'}}>
    <h1 style={{marginLeft:'40px'}}>Github Card App</h1>
    <div style={{marginLeft:'70px'}}><Container/></div>
  </div>
}

export default App;
