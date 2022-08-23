const API_KEY = "0d8ab7cff2692bd014bb25fca16d7158";

// request list to all the endpoints should go here
const requests = {
    getTrending: `/trending/all/week?api_key=${API_KEY}`,
    getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213&year=2019`,
    getNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US`,
    getPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    getTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    getUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
    getByGenre: (type, pageCount)=>{return `/discover/${type}?api_key=${API_KEY}&language=en-US&page=${pageCount}`},
    search: (query)=>{return `search/multi?api_key=${API_KEY}&query=${query}`},
    details: (type,  id )=>{return `/${type}/${id}?api_key=${API_KEY}&append_to_response=videos`}
}


export default requests;