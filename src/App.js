import React from "react";
import  Login from "./pages/Login"
import Profile from "./pages/Profile";
import  Register from "./pages/Register"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}

