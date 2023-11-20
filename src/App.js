import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;