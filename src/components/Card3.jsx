import React from "react";
import "./card3.css";

const Card3 = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <>
          <div className="card3" onClick={()=>props.fevoritiesClick(movie)}>
            <img src={movie.Poster} alt="Unavailable" />
            <div className="card-text">
              <div className="year">{movie.Year}</div>
              <div className="title">{movie.Title}</div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Card3;
