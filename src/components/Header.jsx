import React from 'react';
import { Link } from 'react-router-dom';
function Header(props) {

    const { headerMovie } = props;
    console.log(headerMovie);
    return (        
        <div className='h-100 position-relative header'>
            <div className="position-absolute w-50 top-50 start-0 translate-middle-y details px-4">
                <h1 className='display-2 fw-bold text-white'>{headerMovie.name}</h1>
                <p className='w-75 fs-4 text-white'>{headerMovie.overview}</p>
                <div className="d-flex">
                    <Link className='btn btn-light btn-lg me-3' to="watch">Watch</Link>
                    <Link className='btn btn-light btn-lg' to="info">More Info</Link>
                </div>
            </div>
            
            <img className='img-fluid w-100' src={`https://image.tmdb.org/t/p/original${headerMovie.backdrop_path}`} alt="" />
            <div className="bottom-shadow"></div>
        </div>
    );
}

export default Header;