import React, {useContext } from 'react'
import {GlobalContext} from "../context/GlobalState";
export const ResultCard = ({movie}) => {
  //get global variables
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext); 
  //is movie already stored in the watchlist 
  let storedMovie = watchlist.find(o => o.id === movie.id);
  //if already in watchlist then disable add function
  const watchlistDisabled = storedMovie ? true : false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
          alt={`${movie.title} Poster`}
          />
        ) : (
          // filler image if no poser found
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">

          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0,4) : `-` }</h4>
        </div>
        <div className="controls">
          <button 
          className="btn"
          disabled={watchlistDisabled}
          onClick={() => addMovieToWatchlist(movie)}>Add to watchlist</button>
        </div>
      </div>
    </div>
  )
}
