import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import './App.css';
import Homescreen from './components/Homescreen';
import "swiper/css/bundle";
import MovieList from './components/MovieList';
import SearchResults from './components/SearchResults';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { getAuth, setPersistence, signInWithEmailAndPassword, browserLocalPersistence } from "firebase/auth";


const getAuthState = ()=>{
  const auth = getAuth();
  setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    // return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}



function App() {
  useEffect(()=>{
    getAuthState();
  }, [])

  return (
      <BrowserRouter>
          <Navigation />
          <Routes>
             <Route path='/' exact element={<Homescreen />} ></Route>
             <Route path=':genre' element={<MovieList />} ></Route>
             <Route path='search' element={<SearchResults />} ></Route>
             <Route path='signup' element={<SignUp />} ></Route>
             <Route path='signin' element={<SignIn />} ></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
