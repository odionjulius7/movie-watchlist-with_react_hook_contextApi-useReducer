import React, { useContext } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  // checking to see if the movie searched is already in our watchlist
  let storedMovie = watchlist.find((o) => o.id === movie.id);

  // checking to see if the movie searched is already in our watched
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  // if the movie searched is already in our watchlist && watched disable d ability
  // of adding to watched or watchlist
  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  //if the movie searched is already in our watched disable the ability to
  // adding to watched
  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            // why we use this is becos the movie post url path doesn't come with the full path info
            // so we use tis "https://image.tmdb.org/t/p/w200" and attach the poster_path to get the poster img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" /> // else show a blank white baground when there is no movie poster
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            <Moment format="YYYY">{movie.release_date}</Moment>
            {/* or <Moment format="YYYY">{movie.release_date.substring(0, 4) // to get only the year}</Moment> */}
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};
