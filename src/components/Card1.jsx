import React from "react";
import './card1.css';

const Card1 = (props) => {
  return (
    <>
      <div className="card1">
        <img src={props.Poster} alt="poster" />
        <div className="card-text">
          <div className="year">{props.Year}</div>
          <div className="title">{props.Title}</div>
        </div>
      </div>
    </>
  );
};

export default Card1;
