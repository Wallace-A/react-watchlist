import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  //get watchlist from local storage if available, or return empty array
  watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
  watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider components

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
 
  //save when watchlist is updated
  useEffect(() => {
   localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
   localStorage.setItem("watched", JSON.stringify(state.watched))  
  }, [state]);
  
  // actions
  const addMovieToWatchList = (movie) => {
    dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie});
  }
  return (
    <GlobalContext.Provider 
    value={{
      watchlist: state.watchlist, 
      watched: state.watched,
      addMovieToWatchList,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};