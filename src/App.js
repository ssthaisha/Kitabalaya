import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Headers from './common/header/Header';

function App() {
  return (
    <>
    <Router>
    <Headers/>
    <Routes>
          {/* <Route path="/" about>
            <About />
          </Route>  */}
        </Routes>/
      
    </Router>
    </>
  );
}

export default App;
