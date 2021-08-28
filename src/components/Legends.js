import React from "react";
import "./Legends.css";

const Legends = () => {
  return (
    <div className="container">
      <div>
        <div className="compare box"></div>
        <h1>Compare</h1>
      </div>
      <div>
        <div className="swap box"></div>
        <h1>Swap</h1>
      </div>
      <div>
        <div className="sorted box"></div>
        <h1>Sorted</h1>
      </div>
    </div>
  );
};

export default Legends;
