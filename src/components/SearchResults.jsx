import React, { useEffect, useState } from 'react';
import { getSearchString } from '../features/movies/movieSlice';
import { useSelector } from 'react-redux';
import axios from '../helper/axios';
import requests from '../helper/requests';
import Card from './Card';
import Loader from './common/Loader';
function SearchResults(props) {
    
    const searchValue = useSelector(getSearchString);
    const [searchResult, setSearchResult] = useState([])
    useEffect(()=>{
        const fetchSearchResult=async()=>{
            const response = await axios(requests.search(searchValue));
            setSearchResult(response);
        }
        if(searchValue){
            fetchSearchResult();
        }        
    }, [searchValue]);

    return (
        <div className="container-fluid">
        
      {searchResult.status=== 200 ? 
      <div className="row pt-5 mt-3 gy-4">
        <div className="col-12">
            <h2>{searchValue}</h2>
        </div>
        {
            searchResult.data.results.map((item)=>{
                return(
                    <div key={item.id} className="col-6 col-sm-4 col-md-3 col-xl-2">
                        <Card movie={item}/>
                    </div>
                )
            })            
        }
      </div> :
      <Loader />
      }
    </div>
    );
}

export default SearchResults;