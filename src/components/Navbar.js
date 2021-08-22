import React from "react";

const Navbar = ({ handleSort }) => {
  return (
    <div>
      <h1>Sorting Visualizer</h1>
      <button onClick={handleSort}>Sort</button>
    </div>
  );
};

export default Navbar;
