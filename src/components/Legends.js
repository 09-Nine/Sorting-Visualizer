import React from "react";
import "./Legends.css";

const Legends = ({ algo }) => {
  return (
    <div className="container">
      <div>
        <div className="compare box"></div>
        <h1>Compare</h1>
      </div>
      <div>
        <div className="swap box"></div>
        <h1>{algo !== "mergeSort" ? "Swap" : "Taking From Auxillary Array"}</h1>
      </div>
      <div>
        <div className="sorted box"></div>
        <h1>Sorted</h1>
      </div>
    </div>
  );
};

export default Legends;
