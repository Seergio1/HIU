import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import Home from './Page/Home/Home';
<<<<<<< HEAD
import Exposition from './Page/Exposition/Exposition';
import React, { useEffect } from 'react'
import Lenis from "@studio-freight/lenis";
import NavBar from './Composant/nav-bar/NavBar';
import Cursor from './Composant/cursor/Cursor';
import Oeuvre from './Page/Oeuvre/Oeuvre';
import Evenement from './Page/Evenement/Evenement';
import Login from './Page/Login/Login'
import { NextUIProvider } from "@nextui-org/react";


=======
import Exposition from './Composant/jsx/Exposition_form'
import { NextUIProvider } from '@nextui-org/react';
import Oeuvre from './Composant/jsx/Oeuvre_form';
import Login from '../src/Page/Login/Login'
>>>>>>> 96875d133b898af3a4b24148f03235bd5cf5aa85
function App() {
  const lenis = new Lenis();
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  useEffect(() => {
    requestAnimationFrame(raf);

  }, []);
  return (
    <NextUIProvider>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={
          <>
            <div className='home-container'>
              <NavBar lenis={lenis} />
              <Home />
              <Cursor />
            </div>
          </>
        } />
        <Route path='/Exposition' element={
          <>
            <div className='home-container'>
              <NavBar lenis={lenis} />
              <Exposition />
              <Cursor />
            </div>
          </>
        } />
        <Route path='/Oeuvre' element={
          <>
            <div className='home-container'>
              <NavBar lenis={lenis} />
              <Oeuvre />
              <Cursor />
            </div>
          </>
        } />
        <Route path='/Evenement' element={
          <>
            <div className='home-container'>
              <NavBar lenis={lenis} />
              <Evenement />
              <Cursor />
            </div>
          </>
        } />
        <Route path='/Login' element={
          <>
            <Login />
            <Cursor />
          </>
        } />
      </Routes >
=======
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/expo' element={<Exposition />} />
        <Route path='/oeuvre' element={<Oeuvre />} />
      </Routes>
>>>>>>> 96875d133b898af3a4b24148f03235bd5cf5aa85
    </NextUIProvider>
  )
}

export default App;
