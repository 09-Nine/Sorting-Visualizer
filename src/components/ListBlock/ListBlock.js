import React from "react";
import "./ListBlock.css";

const ListBlock = ({ array, compare, swap, sorted }) => {
  const width = 60 / array.length;
  const fontSize = width / 2.5;

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

    const style = {
      background: bgColor,
      // borderColor: bgColor,
      height: `${height}px`,
      width: `${width}vw`,
      fontSize: `${fontSize}vw`,
    };
    // console.log(width);

    return (
      <div className="array-bar" key={index} style={style}>
        {width >= 1.2 ? value : ""}
      </div>
    );
  });
  return <div className="bar-container">{bars}</div>;
};

export default ListBlock;
