import React, { useEffect, useState } from "react";
import ListBlock from "./components/ListBlock";
import Legends from "./components/Legends";
import Navbar from "./components/Navbar";

import selectionSort from "./algorithms/selectionSort";

const App = () => {
  const [array, setArray] = useState([]);
  const [compare, setCompare] = useState([]);
  const [swap, setSwap] = useState([]);
  const [sorted, setSorted] = useState([]);

  const resetArray = () => {
    const arr = [];
    for (let i = 0; i <= 200; i++) {
      arr.push(getRandomInt(5, 500));
    }
    setArray(arr);
  };

  useEffect(() => {
    resetArray();
  }, []);

  const handleSort = () => {
    const algoSort = (orders) => {
      for (let i = 0; i < orders.length; i++) {
        setTimeout(() => {
          const [j, k, arr, index] = orders[i];
          setCompare(j, k);
          setSwap([]);

          if (index) {
            setSorted((prev) => [...prev, index]);
          }

          if (arr) {
            setArray(arr);
            setSwap(j, k);
          }
        }, 250);
      }
    };
    algoSort(selectionSort(array));
  };

  return (
    <div>
      <Navbar handleSort={handleSort} />
      <ListBlock array={array} compare={compare} swap={swap} sorted={sorted} />
      <Legends />
    </div>
  );
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default App;
