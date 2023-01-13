import React from 'react'
import Register from './pages/register/Register';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from './pages/home/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App