import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import SignUp from '../Pages/SignUp';
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  );
}

export default AllRoutes
 
