import React from "react";
import "./ListBlock.css";

const ListBlock = ({ array, compare, swap, sorted }) => {
  const bars = array.map((value, index) => {
    let color = "#00b4d8";

    if (compare && (index === compare[0] || index === compare[1])) {
      color = "#fb8500";
    }

    if (swap && (index === swap[0] || index === swap[1])) {
      color = "#d00000";
    }

    if (sorted && sorted.includes(index)) {
      color = "#90be6d";
    }

    return (
      <div
        className="array-bar"
        key={index}
        style={{ height: `${value}px`, backgroundColor: `${color}` }}
      ></div>
    );
  });
  return <div className="bar-container">{bars}</div>;
};

export default ListBlock;
