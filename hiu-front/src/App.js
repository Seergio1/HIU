import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import Home from './Page/Home/Home';
import Exposition from './Composant/jsx/Exposition_form'
import { NextUIProvider } from '@nextui-org/react';
import Oeuvre from './Composant/jsx/Oeuvre_form';
import Login from '../src/Page/Login/Login'
function App() {
  return (
    <NextUIProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/expo' element={<Exposition />} />
        <Route path='/oeuvre' element={<Oeuvre />} />
      </Routes>
    </NextUIProvider>
  )
}

export default App;
