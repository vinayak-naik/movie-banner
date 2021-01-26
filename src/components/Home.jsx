import React, { useEffect } from "react";
import { useState } from "react";
import Card2 from './Card2';
import Card3 from './Card3';
import Header from './Header';
import MovieData from './MovieData';
import './home.css';



function mCard(val) {
  console.log(val);
  return (
    <Card2
      Title={val.Title}
      Year={val.Year}
      Type={val.Type}
      Poster={val.Poster}
    />
  );
}
// ---------------------------------------------------
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue,setSearchValue] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=d80c16b8`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search){

      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  return (
    <>
    <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="left">
        <div className="fav">
          <div className="fav-head">
            <h2>Fevorities</h2>
          </div>
          <div className="fav-body">

          <h4>"Under Development"</h4>
          
          </div>
        </div>
        <div className="movie">
          <div className="movie-head">
            <h2>Kannada Movies</h2>
          </div>
          <div className="movie-body">

          {MovieData.map(mCard)}

          </div>
        </div>
      </div>
      <div className="right">
        <div className="search">
          <div className="search-head">
            <h2>Search Result</h2>
          </div>
          <div className="search-body">

          <Card3 movies={movies}/>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
