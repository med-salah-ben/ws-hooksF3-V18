import React, { useState} from 'react';
import MoviesList from './components/MoviesList';
import Search from './components/Search';
import { moviesData } from './Data';
import "./App.css"
import AddMovie from './components/AddMovie';

const App = () => {
  const [movies,setMovies]= useState(moviesData);
  const [ratingSearch,setRatingSearch]= useState(0);
  const [searchTitle,setSearchTitle]=useState("");

  

  const handleMovie = (movie)=>{
    console.log(movie)
    setMovies([...movies,movie])
    console.log(movie)
  }

  return (
    <div>
     
      <Search  setRatingSearch={setRatingSearch} setSearchTitle={setSearchTitle} />
      <AddMovie handleMovie={handleMovie} />
      <MoviesList ratingSearch={ratingSearch} searchTitle={searchTitle}  movies={movies} />
      
    </div>
  )
}

export default App