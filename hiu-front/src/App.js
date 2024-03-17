import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
<<<<<<< Updated upstream





=======
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import Test from './Page/Test/Test';
>>>>>>> Stashed changes
function App() {

  return (
    <>
      <Routes>
<<<<<<< Updated upstream
        <Route path='/' element={""} />
=======
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Test' element={<Test />} />
>>>>>>> Stashed changes
      </Routes>
    </>
  )
}

export default App;
