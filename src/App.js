import React, { useEffect, useState } from "react";
import ListBlock from "./components/ListBlock";
import Legends from "./components/Legends";
import Navbar from "./components/Navbar";

import selectionSort from "./algorithms/selectionSort";
import bubbleSort from "./algorithms/bubbleSort";

const App = () => {
  const [array, setArray] = useState([]);
  const [compare, setCompare] = useState([]);
  const [swap, setSwap] = useState([]);
  const [sorted, setSorted] = useState([]);

  const resetArray = () => {
    const arr = [];
    for (let i = 0; i <= 50; i++) {
      arr.push(getRandomInt(5, 100));
    }
    setArray(arr);
    setSorted([]);
  };

  useEffect(() => {
    resetArray();
  }, []);

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleSort = () => {
    const algoSort = async (orders) => {
      for (let i = 0; i < orders.length; i++) {
        const [j, k, arr, index] = orders[i];
        setCompare([j, k]);
        setSwap([]);
        if (index !== null) {
          setSorted((prev) => [...prev, index]);
        }
        if (arr) {
          setArray(arr);
          setSwap([j, k]);
        }

        await sleep(0);
        // await new Promise(() => {
        //   setTimeout(() => {
        //     const [j, k, arr, index] = orders[i];
        //     setCompare([j, k]);
        //     setSwap([]);

        //     if (index !== null) {
        //       setSorted((prev) => [...prev, index]);
        //     }

        //     if (arr) {
        //       setArray(arr);
        //       setSwap([j, k]);
        //     }
        //   }, 0);
        // });
      }
    };
    algoSort(selectionSort(array));
  };

  return (
    <div>
      <Navbar handleSort={handleSort} resetArray={resetArray} />
      <ListBlock array={array} compare={compare} swap={swap} sorted={sorted} />
      <Legends />
    </div>
  );
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default App;
