import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Integration from './components/Integration';
import Overview from './components/Overview';
import Consulting from './components/Consulting';
import Pricing from './components/Pricing';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sign-in" element={<Login/>} />
          <Route path="/sign-up" element={<Signup/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/integration" element={<Integration/>} />
          <Route path="/overview" element={<Overview/>} />
          <Route path="/consulting" element={<Consulting/>} />
          <Route path="/pricing" element={<Pricing/>} />
        </Routes>
       </Router>
    </>
  );
}

export default App;
