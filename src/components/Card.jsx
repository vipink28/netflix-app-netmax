import React from "react";

function Card(props) {
  const { movie } = props;
  return (
    <div className="col-2">
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top" alt="..." />
        {/* <div className="card-body">
          <h5 className="card-title">{movie?.name || movie?.title || movie?.original_title}</h5>
          <p className="card-text">
            {movie.overview}
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Card;
