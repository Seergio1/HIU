import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import Test from './Page/Test/Test';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Test' element={<Test />} />
      </Routes>
    </>
  )
}

export default App;
