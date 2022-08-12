import React from 'react';
import Card from './Card';
function Row(props) {
    const {content, title} = props;
    return (
        <div className='text-start mb-5'>
            <h2 className='fs-3 fw-semibold mb-3 text-white'>{title}</h2>
            <div className="row flex-nowrap movie-row">
                {
                    content.movieList.map((item)=>{
                        return(
                        <Card key={item.id} movie={item}/>
                        )
                    })
                }                
            </div>
        </div>
    );
}

export default Row;