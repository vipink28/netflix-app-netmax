import React from 'react';
import { Outlet } from 'react-router-dom';

import bgImage from '../assets/netflix-home-bg.jpg'

function Home(props) {
    return (
        <div className='container-fluid vh-100'>
            <div className="bg-img">
                <img className='vw-100 vh-100' src={bgImage} alt="netflix-cover" />
            </div>
            <div className="content">
            <Outlet />
            </div>

            <div className="gradient-bg"></div>
        </div>
    );
}

export default Home;