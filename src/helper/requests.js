const API_KEY = "0d8ab7cff2692bd014bb25fca16d7158";

const requests = {
    getTrending: `/trending/all/week?api_key=${API_KEY}`,
    getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    getLatestMovies : `/movie/latest?api_key=${API_KEY}&language=en-US`,
    getNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    getPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    getTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    getUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
}

export default requests;