import React, { useEffect } from "react";
import { useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Header from "./Header";
import MovieData from "./MovieData";
import "./home.css";

function mCard(val) {
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
  const [fevorities, setFevorities] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=d80c16b8`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
      document.getElementById("type").style.display = "none";
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const addFevorateMovie=(movie)=>{
    setFevorities([...fevorities,movie])
    console.log(fevorities)
  }
  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="left">
        <div className="fav">
          <div className="fav-head">
            <h2>Fevorities</h2>
          </div>
          <div className="fav-body">
            {fevorities.map((val,k)=>(

            <Card1 Title={val.Title}
            Year={val.Year}
            Type={val.Type}
            Poster={val.Poster}/>
            ))}
          </div>
        </div>
        <div className="movie">
          <div className="movie-head">
            <h2>Kannada Movies</h2>
          </div>
          <div className="movie-body">{MovieData.map(mCard)}</div>
        </div>
      </div>
      <div className="right">
        <div className="search">
          <div className="search-head">
            <h2>Search Result</h2>
          </div>
          <div className="search-body">
            <Card3 movies={movies} fevoritiesClick={addFevorateMovie} />
            <h1 id="type"><label for='input-field'>Type to Search</label></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
