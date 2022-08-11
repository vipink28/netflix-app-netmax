import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import './App.css';
import Homescreen from './components/Homescreen';

function App() {
  return (
      <BrowserRouter>
          <Navigation />
          <Routes>
             <Route path='/' exact element={<Homescreen />} ></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
