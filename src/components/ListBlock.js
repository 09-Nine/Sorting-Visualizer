import React, { useEffect, useState } from "react";
import "./ListBlock.css";

const ListBlock = ({ array, compare, swap, sorted }) => {
  const bars = array.map((value, index) => {
    let bgColor = "#0aefff";

    if (compare && compare.includes(index)) {
      bgColor = "orange";
    }

    if (swap && swap.includes(index)) {
      bgColor = "red";
    }

    if (sorted && sorted.includes(index)) {
      bgColor = "#be0aff";
    }

    const height = (value * 300) / array.length;
    const width = 800 / array.length;
    const fontSize = width / 2.5;

    const style = {
      background: bgColor,
      // borderColor: bgColor,
      height: `${height}px`,
      width: `${width}px`,
      fontSize: `${fontSize}px`,
    };

    return (
      <div className="array-bar" key={index} style={style}>
        {width > 16 ? value : ""}
      </div>
    );
  });
  return <div className="bar-container">{bars}</div>;
};

export default ListBlock;
