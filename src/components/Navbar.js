import React from "react";

const Navbar = ({ handleSort, resetArray }) => {
  return (
    <div>
      <h1>Sorting Visualizer</h1>
      <button onClick={resetArray}>Reset</button>
      <button onClick={handleSort}>Sort</button>
    </div>
  );
};

export default Navbar;
