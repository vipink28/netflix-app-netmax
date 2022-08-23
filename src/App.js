import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import './App.css';
import Homescreen from './components/Homescreen';
import "swiper/css/bundle";
import Test from './components/Test';
import MovieList from './components/MovieList';
import SearchResults from './components/SearchResults';
function App() {
  return (
      <BrowserRouter>
          <Navigation />
          <Routes>
             <Route path='/' exact element={<Homescreen />} ></Route>
             <Route path=':genre' exact element={<MovieList />} ></Route>
             <Route path='search' exact element={<SearchResults />} ></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
