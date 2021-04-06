import React, {useState} from 'react'
import { ResultCard } from "./ResultCard";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  //update search text on input
  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    //get list of movies using api
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`).then(
      results => results.json())
      .then(data => {
        if(!data.errors) {
          //if no errors then use data
          setResults(data.results);
        } else {
          // else set results to empty
          setResults([]);
        }
        
      });
      
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input type="text" 
            placeholder="search for a movie"
            value={query}
            onChange={onChange}/>
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map(movie => (
                <li key={movie.id}>
                  <ResultCard movie={movie}/>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
