
const initailState = { movieList: [], loading: true };

export const netflixOriginalsReducer = (state = initailState, action) => {
  switch (action.type) {
    case "GETNETFLIXORIGINALS":
      // this will return loading status true and intitial state only
      return { ...state, loading: true };
    case "GETNETFLIXORIGINALSPASSED":
      // this will set the data into state and set the loading status to false.
      return { ...state, loading: false, movieList: action.payload };
    case "GETNETFLIXORIGINALSFAIL":
      // this will return error message in the state
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};


export const trendingAllReducer = (state = initailState, action) => {
  switch (action.type) {
    case "GETTRENDING":
      // this will return loading status true and intitial state only
      return { ...state, loading: true };
    case "GETTRENDINGPASSED":
      // this will set the data into state and set the loading status to false.
      return { ...state, loading: false, movieList: action.payload };
    case "GETTRENDINGFAIL":
      // this will return error message in the state
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};


export const topRatedMoviesReducer = (state = initailState, action) => {
  switch (action.type) {
    case "GETTOPRATEDMOVIES":
      // this will return loading status true and intitial state only
      return { ...state, loading: true };
    case "GETTOPRATEDMOVIESPASSED":
      // this will set the data into state and set the loading status to false.
      return { ...state, loading: false, movieList: action.payload };
    case "GETTOPRATEDMOVIESFAIL":
      // this will return error message in the state
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};


export const nowPlayingMoviesReducer = (state = initailState, action) => {
  switch (action.type) {
    case "GETNOWPLAYINGMOVIES":
      // this will return loading status true and intitial state only
      return { ...state, loading: true };
    case "GETNOWPLAYINGMOVIESPASSED":
      // this will set the data into state and set the loading status to false.
      return { ...state, loading: false, movieList: action.payload };
    case "GETNOWPLAYINGMOVIESFAIL":
      // this will return error message in the state
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};


export const upcomingMoviesReducer = (state = initailState, action) => {
  switch (action.type) {
    case "GETUPCOMINGMOVIES":
      // this will return loading status true and intitial state only
      return { ...state, loading: true };
    case "GETUPCOMINGMOVIESPASSED":
      // this will set the data into state and set the loading status to false.
      return { ...state, loading: false, movieList: action.payload };
    case "GETUPCOMINGMOVIESFAIL":
      // this will return error message in the state
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};


export const popularMoviesReducer = (state = initailState, action) => {
  switch (action.type) {
    case "GETNOWPOPULARMOVIES":
      // this will return loading status true and intitial state only
      return { ...state, loading: true };
    case "GETNOWPOPULARMOVIESPASSED":
      // this will set the data into state and set the loading status to false.
      return { ...state, loading: false, movieList: action.payload };
    case "GETNOWPOPULARMOVIESFAIL":
      // this will return error message in the state
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

