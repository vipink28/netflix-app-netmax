import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNetflixOriginals, getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getTrendingAll, getUpcomingMovies } from "../action";
import Loader from "./common/Loader";
import Row from './Row';

function Homescreen(props) {
  const dispatch = useDispatch();

  const data = useSelector((state) => state);

  const { netflixOriginals, topRatedMovies, nowPlayingMovies, popularMovies, trendingAll, upcomingMovies } = data;


  //desctrucure the state received from store
  const { loading, movieList } = netflixOriginals;

  // dispatch action to fetch netflix original shows on page load
  useEffect(() => {
    dispatch(getNetflixOriginals());
    dispatch(getPopularMovies());
    dispatch(getUpcomingMovies());
    dispatch(getNowPlayingMovies());
    dispatch(getTrendingAll());
    dispatch(getTopRatedMovies());
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
          <div className="wrapper container-fluid">
           <Row content={netflixOriginals} title="Netflix Originals"/>
           <Row content={popularMovies} title="Popular Movies"/>
           <Row content={trendingAll} title="Trending Now"/>
           <Row content={nowPlayingMovies} title="Now Playing"/>
           <Row content={topRatedMovies} title="Top Rated Movies"/>
           <Row content={upcomingMovies} title="Upcoming Movies"/>
           </div>
        </>


      )}
      


    </div>
  );
}

export default Homescreen;
