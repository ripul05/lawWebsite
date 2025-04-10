import './App.css';
import CardContent from './CardContent/CardContent';
import LandingPage from './LandingPage/LandingPage';
import React, { useRef, useState } from 'react';
import ImmigrationProcess from './trial/trial'

function App() {
  

  return (
    <>
    <LandingPage/>
    <ImmigrationProcess/>
    <CardContent/>
    </>

  );
}

export default App;
