import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home, About, Challenges, Contact } from './pages'

const App = () => {
  return (
    <main className="bg-slate-300/20 h-[100vh]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/challenges" element={<Challenges/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
