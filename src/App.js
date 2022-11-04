import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Links from './Components/Links';
import Contact from './Components/Contact';


function App() {
  return (
      <>
       <Routes>
        <Route path="/">
          <Route index element={<Links/>} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
      </>
  );
}

export default App;
