import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Body } from './components/body/Body'

export default App
function App() {
  return (
    <>
    <Navbar/>   
    <Body/>
    </>
  );
  }