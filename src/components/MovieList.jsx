import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, getItemByGenre } from "../features/movies/movieSlice";
import Card from "./Card";
import Loader from "./common/Loader";
function MovieList() {
  const { genre } = useParams();
  const dispatch = useDispatch();
  const itemByGenre = useSelector(getItemByGenre);
  const [pageCount, setPageCount] = useState(1);
  useEffect(() => {
    dispatch(fetchCategory(genre, pageCount));
  }, [dispatch, genre, pageCount]);

  return (
    <>
    <div className="container-fluid">
      {itemByGenre.status === "succeeded" ? (
        <div className="row pt-5 mt-3 gy-4">
          <div className="col-12">
            <h2 className="text-white text-capitalize">{genre}</h2>
          </div>
          {itemByGenre.details.results.map((item) => {
            return (
              <div key={item.id} className="col-6 col-sm-4 col-md-3 col-xl-2">
                <Card movie={item} type={genre} />
              </div>
            );
          })}
        </div>
      ) : (
        <Loader />
      )}

      <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <span className="page-link" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </span>
    </li>
    <li className="page-item"><span className="page-link" >1</span></li>
   
    <li className="page-item">
      <span className="page-link" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </span>
    </li>
  </ul>
</nav>
</div>
</>

  );
  
}
export default MovieList;
