import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNetflixOriginals } from "../action";
import Loader from "./common/Loader";

function Homescreen(props) {
  const dispatch = useDispatch();
  const netflixOriginals = useSelector((state) => state.netflixOriginals);

  const { loading, movieList } = netflixOriginals;

  useEffect(() => {
    dispatch(getNetflixOriginals());
  }, [dispatch]);

  let randomNumber = () =>{
     return Math.floor(Math.random() * movieList.length);
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header  headerMovie = {movieList[randomNumber()]}/>
        </>
      )}
    </div>
  );
}

export default Homescreen;
