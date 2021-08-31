import React from "react";
import "./Navbar.css";

const Navbar = ({
  handleSort,
  resetArray,
  speed,
  setSpeed,
  size,
  setSize,
  algo,
  setAlgo,
  isCompleted,
  isSorting,
}) => {
  return (
    <div className="nav-bar">
      <h1>Sorting Visualizer</h1>
      <div className="setting">
        <div className="input-container">
          <label>Speed</label>
          <input
            type="range"
            min="1"
            max="10"
            className="slider"
            value={speed}
            onChange={(evt) => setSpeed(evt.target.value)}
            step="1"
            disabled={isSorting}
          />
        </div>
        <div className="input-container">
          <label>Size</label>
          <input
            type="range"
            min="1"
            max="10"
            className="slider"
            value={size}
            onChange={(evt) => setSize(evt.target.value)}
            step="1"
            disabled={isSorting}
          />
        </div>

        <div className="select">
          <select
            value={algo}
            onChange={(evt) => setAlgo(evt.target.value)}
            disabled={isSorting}
          >
            <option value="selectionSort">Selection Sort</option>
            <option value="bubbleSort">Bubble Sort</option>
            <option value="insertionSort">Insertion Sort</option>
            <option value="quickSort">Quick Sort</option>
            <option value="heapSort">Heap Sort</option>
            <option value="mergeSort">Merge Sort</option>
          </select>
        </div>

        <button onClick={() => resetArray(size)} disabled={isSorting}>
          Reset
        </button>
        <button onClick={handleSort} disabled={isSorting || isCompleted}>
          Sort
        </button>
      </div>
    </div>
  );
};

export default Navbar;
