
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
