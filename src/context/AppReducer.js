export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
          //i use payload, cos it only id that is passed as our parameter and not an object
        ),
      };
    case "ADD_MOVIE_TO_WATCHED":
      return {
        // from watchlist to watched
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id //i used payload.id, cos i got it frm the id in the movie object
        ),
        watched: [action.payload, ...state.watched],
      };
    case "MOVE_TO_WATCHLIST":
      return {
        // from watched to watchlist
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id //i used payload.id, cos i got it frm the id in the movie object
        ),
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
        //i use payload, cos it only id that is passed as our parameter and not an object
      };
    default:
      return state;
  }
};
