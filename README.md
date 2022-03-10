# all this explanation is from the video from youtube (code 15 react project-complete course) by john smila 8:55minutes upward for git, netlify and redirect

## NOTE: there is always an issue with using react-router and netlify, where when u refresh a link page the netlify with tell you page not found

# 1: to fix that netlify complain create a \_redirects file in the public folder and insert this into it

/\* /index.html 200

## exactly /\* /index.html 200 into the \_redirect file of public folder

# 3: in package.json always change the "build": "react-scripts build" to "build": "CI= react-scripts build" cos of the the build error netliy always encounter and it always help you rebuild in netlify when you push changes to github

# 4: finally u can use the github icon at the left side of the editor(vscode) under the file, under the searcg icon to commit and push changes to ur github repo neatly

note the backward slash is not among, readme.md added it(\)

##

###

### creating a movie download and watchlist from TMDB on the youtube video CREATE a MOVIE WATCHLIST with REACT hooks, context api and local storage

## making an API call to tmdb api to get movies

# but note you need he tmdb api key and set it to a variable in our .env.local file

<!-- // how to use local storage initial state values
const initialState = {
    // we check to see if we have anything in the localStorage watchList
    // if yes we json stringify it and give the value to our watchList
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

##
// since but arrays are in the state u can put them in one useEffect to set localStorage
 useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);
 -->

## how to disable multiple option with one logic

<!--  // checking to see if the movie searched is already in our watchlist
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
  const watchedDisabled = storedMovieWatched ? true : false; -->
