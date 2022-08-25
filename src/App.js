import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homescreen from "./components/Homescreen";
import "swiper/css/bundle";
import MovieList from "./components/MovieList";
import SearchResults from "./components/SearchResults";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from "./components/Home";
import { login, userData } from "./features/user/userSlice";
import { useSelector, useDispatch } from 'react-redux';
import Profile from "./components/Profile";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(userData);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          email: user.email,
          uid: user.uid,
          profileName: user.displayName
        }))
      } else {
        dispatch(login)
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {!user ? (
          <Route path="/" exact element={<Home />}>
            <Route index element={<SignUp />} />
            <Route path="signup" element={<SignUp />}></Route>
            <Route path="signin" element={<SignIn />}></Route>
          </Route>
        ) : (
          <Route path="/" exact element={<Homescreen />}>
            <Route path=":genre" element={<MovieList />}></Route>
            <Route path="search" element={<SearchResults />}></Route>
            <Route path="profile" element={<Profile />}></Route>
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
