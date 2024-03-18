import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import Home from './Page/Home/Home';
import Exposition from './Page/Exposition/Exposition';
import React, { useEffect } from 'react'
import Lenis from "@studio-freight/lenis";
import NavBar from './Composant/nav-bar/NavBar';
import Cursor from './Composant/cursor/Cursor';
import Oeuvre from './Page/Oeuvre/Oeuvre';
import Evenement from './Page/Evenement/Evenement';
import Login from './Page/Login/Login'
import { NextUIProvider } from "@nextui-org/react";
import Footer from './Composant/footer/Footer';
import PhotoIA from './Page/PhotoIA/PhotoIA';


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
        <Route path='/' element={
          <>
            <div className='home-container'>
              <NavBar lenis={lenis} />
              <Home />
              <Cursor />
              <Footer />
            </div>
          </>
        } />
        <Route path='/Exposition' element={
          <>
            <div className='home-container'>
              <NavBar lenis={lenis} />
              <Exposition />
              <Cursor />
              <Footer />
            </div>
          </>
        } />
        <Route path='/Oeuvre' element={
          <>
            <div className='home-container'>
              <NavBar lenis={lenis} />
              <Oeuvre />
              <Cursor />
              <Footer />
            </div>
          </>
        } />
        <Route path='/Evenement' element={
          <>
            <div className='home-container'>
              <NavBar lenis={lenis} />
              <Evenement />
              <Cursor />
              <Footer />
            </div>
          </>
        } />
        <Route path='/Login' element={
          <>
            <Login />
            <Cursor />
          </>
        } />

        <Route path='/PhotoIA' element={
          <>
            <NavBar lenis={lenis} />
            <PhotoIA />
            <Cursor />
          </>
        } />
      </Routes >

    </NextUIProvider>
  )
}

export default App;
