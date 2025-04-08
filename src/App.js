import { BrowserRouter , Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Admin from "./components/admin";
import User from "./components/userDashboard"
import Login from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
