const initailState = { movieList: [], loading: true };

export const netflixOriginalsReducer = (state = initailState, action) => {
  switch (action.type) {
    case "GETNETFLIXORIGINALS":
      return { ...state, loading: true };
    case "GETNETFLIXORIGINALSPASSED":
      return { ...state, loading: false, movieList: action.payload };
    case "GETNETFLIXORIGINALSFAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
