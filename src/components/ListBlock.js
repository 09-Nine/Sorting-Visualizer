import React from "react";
import "./ListBlock.css";

const ListBlock = ({ array, compare, swap, sorted }) => {
  const bars = array.map((value, index) => {
    let color = "#0aefff";

    if (compare && (index === compare[0] || index === compare[1])) {
      color = "orange";
    }

    if (swap && (index === swap[0] || index === swap[1])) {
      color = "red";
    }

    if (sorted && sorted.includes(index)) {
      color = "#be0aff";
    }

    return (
      <div
        className="array-bar"
        key={index}
        style={{ height: `${value * 4}px`, borderColor: `${color}` }}
      ></div>
    );
  });
  return <div className="bar-container">{bars}</div>;
};

export default ListBlock;
