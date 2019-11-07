import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Sitebar from './home/Navbar'
import Auth from './auth/Auth'
import PlantIndex from './plants/PlantIndex';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const Background = styled.div`
  background: #dae6e0;
  height: 100vh;
  `;

function App() {
const [sessionToken, setSessionToken] = useState('');

useEffect(() => {
  if (localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'));
  }
}, [])

const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}
const clearToken = () => {
  localStorage.clear();
  setSessionToken('');
}

const protectedViews = () => {
  return (sessionToken === localStorage.getItem('token') ? <PlantIndex setSessionToken={setSessionToken} token={sessionToken}/> : <Auth updateToken={updateToken}/>)
}
  return (
    
    <Background>
    <div className="App">
    {protectedViews()}
    </div>
  
    </Background>
    
    
  );
}

export default App;
