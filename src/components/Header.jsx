import React from "react";
import "./header.css";

const Header = (props) => {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <h1>
            Movie Banner<small>.com</small>
          </h1>
        </div>
        <div className="header-right">
          <div className="input-box">
            <input 
            type="text" 
            placeholder="Type to Search..." 
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
         />
            <button>AutoSearch</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
