import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';

function Navigation(props) {
    return (
      <nav className="navbar navbar-expand-md fixed-top" aria-label="netflixnavbar">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={ logo } alt="Netflix" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#netflixnavbar"
          aria-controls="netflixnavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="netflixnavbar">
          <ul className="navbar-nav mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeclassname="active"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="genre/tv">
                Tv Shows
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="genre/movie">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="latest">
                New & Popular
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="my-list">
                My List
              </NavLink>
            </li>
          </ul>
          <form role="search" className="ms-auto me-3">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              role="button"
            >
              <img src={ avatar } alt="avatar" />
            </div>
            <ul className="dropdown-menu dropdown-menu-end text-end mt-3">
              <li>
                <NavLink className="dropdown-item" to="profiles">
                  Manage Profiles
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="exitprofile">
                  Exit Profile
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="account">
                  Account
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="help-center">
                  Help Center
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="signout">
                  Sign out of Netflix
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    );
}

export default Navigation