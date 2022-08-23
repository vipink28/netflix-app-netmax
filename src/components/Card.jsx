import axios from "../helper/axios";
import { useState } from "react";
import Details from "./Details";
import requests from "../helper/requests";
function Card(props) {
  const { movie, index, type } = props;
  const [active, setActive]= useState(false);

  const [movieDetail, setMovieDetail] = useState({});  

  const showDetails = async(id) =>{
    const response = await axios(requests.details(type, id));
    setMovieDetail(response.data);
    setActive(true);
  }

  let rating = movie.vote_average / 2;
  let count = Math.floor(rating);
  const totalStars = [...Array(5)];

  

  return (
    <>
      <div className="card movie-card border-0">
        <div className="row-card" onClick={()=>{showDetails(movie.id)}}>
        <img
          src={`https://image.tmdb.org/t/p/original${
            index === 0 ? movie.poster_path : movie.backdrop_path
          }`}
          className="card-img-top rounded-0 h-100"
          alt="..."
        />
        <div className="card-body text-white">

          <h5 className="card-title fw-bold mb-2">{movie?.title || movie?.original_title || movie?.name || movie?.original_name }</h5>

          <p className="fw-semibold mb-0">{movie.release_date?.substring(0, 4) || movie.first_air_date.substring(0, 4)}</p>

          <div className="d-flex align-items-center">
          {totalStars.map((item, index)=>{
            return(
              index < count?
                <i key={index} className="fa-solid fa-star"></i>                     
              : <i key={index} className="fa-regular fa-star"></i>
            )
          })}
          <p className="ms-3 mb-0 fw-semibold">{rating.toFixed(1)}</p>
          </div>
          
        </div>
        <div className="left-shadow"></div>         
      </div>
      </div>
      <Details isActive={active}>
        <div className="details-modal">
            <div className="modal-content">
              <h3>{movieDetail?.title || movieDetail?.original_title || movieDetail?.name }</h3>
            </div>
        </div>
      </Details>
    </>
  );
}

export default Card;
