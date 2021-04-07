import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";
import {MovieCard} from "./MovieCard";

export const Watched = () => {
  const {watched} = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watch Movies</h1>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map(movie => (
              <MovieCard movie={movie} type="watched"></MovieCard>
            ))}
          </div>
        ) : (
          <h2 className="no-movies">You haven't watched any movies!</h2>
        )}
        
      </div>
      
    </div>
  )
}
