
import React, { useEffect, useState } from "react";
import axios from "../helper/axios";
import requests from "../helper/requests";
import TrailerComponent from "./TrailerComponent";
function Header(props) {
  
const { headerMovie } = props;
const [movieDetail, setMovieDetail] = useState({});  
const [viewTrailer, setViewTrailer] = useState(false);
const [trailerKey, setTrailerKey] = useState("");
useEffect(()=>{
  const showDetails = async(id) =>{
    const response = await axios(requests.details("tv", id));
    setMovieDetail(response.data);
  }
  showDetails(headerMovie.id);
  
}, [headerMovie]);

const showTrailer=()=>{
  setViewTrailer(!viewTrailer);
  const youtubeTrailer = movieDetail.videos.results?.find((item)=>{
    return item.site === "YouTube";
  })
  setTrailerKey(youtubeTrailer.key)
}

const handleClose = () =>{
  setViewTrailer(!viewTrailer);
}



let rating = movieDetail.vote_average / 2;
let count = Math.floor(rating);
const totalStars = [...Array(5)];


  return (
    <div className="h-100 position-relative header">
      <div className="position-absolute w-50 top-50 start-0 translate-middle-y details px-4">
        <h1 className="display-2 fw-bold text-white">
        {console.log(movieDetail)}
          {movieDetail?.name ||
            movieDetail?.title ||
            movieDetail?.original_title}
        </h1>
        <p className="w-75 fs-4 text-white">
          {movieDetail.overview?.substring(0, 100) + "..."}
        </p>        
        <div className="d-flex align-items-center text-white mb-3">
          {totalStars.map((item, index)=>{
            return(
              index < count?
                <i key={index} className="fa-solid fa-star"></i>                     
              : <i key={index} className="fa-regular fa-star"></i>
            )
          })}
          <p className="ms-3 mb-0 fw-semibold">{rating.toFixed(1)}</p>
          </div>
          <div className="d-flex align-items-center mb-3">
              {
                movieDetail.genres?.map((item)=>{
                  return <span key={item.id} className="badge bg-danger me-2 py-2 px-3">{item.name}</span>
                })
              }
              
          </div>
          <button className="btn btn-light btn-lg me-3" onClick={showTrailer}>
            Watch Trailer
          </button>
          
      </div>
      {/* https://image.tmdb.org/t/p/original  this is the base url for all images in TMDB API*/}
      <img
        className="img-fluid w-100"
        src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
        alt=""
      />
      <div className="left-shadow"></div>
      <div className="bottom-shadow"></div>
      <TrailerComponent show={viewTrailer} trailerKey = {trailerKey} handleClose={handleClose}/>
    </div>
  );
}

export default Header;
