import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNetflixOriginals } from "../action";
import Loader from "./common/Loader";

function Homescreen(props) {
  const dispatch = useDispatch();

  const netflixOriginals = useSelector((state) => state.netflixOriginals);

  //desctrucure the state received from store
  const { loading, movieList } = netflixOriginals;

  // dispatch action to fetch netflix original shows on page load
  useEffect(() => {
    dispatch(getNetflixOriginals());
  }, [dispatch]);

  //generate a random number 
  let randomNumber = () =>{
     return Math.floor(Math.random() * movieList.length);
  }

  return (
    <div>
      {/* if data is loading show loading icon   */}
      {loading ? (
        <Loader />
      ) : (
        //when loading is done show data    
        <>
        {/* pass a random movie to header */}
          <Header  headerMovie = {movieList[randomNumber()]}/>
        </>
      )}
    </div>
  );
}

export default Homescreen;
