import React from "react";
import "./Navbar.css";

const Navbar = ({ handleSort, resetArray }) => {
  return (
    <div className="nav-bar">
      <h1>Sorting Visualizer</h1>
      <div className="setting">
        <div className="input-container">
          <label>Speed</label>
          <input type="range" min="0" max="11" className="slider" />
        </div>
        <div className="input-container">
          <label>Length</label>
          <input type="range" min="0" max="11" className="slider" />
        </div>

        <div className="select">
          <select>
            <option value="selectionSort">Selection Sort</option>
            <option value="bubbleSort">Bubble Sort</option>
          </select>
        </div>

        <button onClick={resetArray}>Reset</button>
        <button onClick={handleSort}>Sort</button>
      </div>
    </div>
  );
};

export default Navbar;
