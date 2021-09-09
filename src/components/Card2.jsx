import React from 'react';
import './card2.css';

const Card2 = (props) => {
  return (
    <>
      <div className="card2">
        <img src={props.Poster} alt="poster" />
        <div className="card-text">
          <div className="year">{props.Year}</div>
          <div className="title">{props.Title}</div>
        </div>
      </div>
    </>
  );
};

export default Card2;
