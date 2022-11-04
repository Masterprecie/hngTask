import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Links from './Components/Links';
import Contact from './Components/Contact';


function App() {
  return (
      <>
      <Routes>
      <Route path='/' element= {<Links/>}/>
      <Route path='contact' element= {<Contact/>} />

      </Routes>
      </>
  );
}

export default App;
