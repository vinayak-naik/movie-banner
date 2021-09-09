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
              id='input-field'
              type="text"
              placeholder="Enter Movie Name..."
              value={props.value}
              onChange={(event) => props.setSearchValue(event.target.value)}
            />
            {/* <button title="AutoSearch Enabled">AutoSearch</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
