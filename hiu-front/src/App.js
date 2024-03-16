import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import Home from './Page/Home/Home';





function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App;
