import React, { useEffect, useState } from "react";
import ListBlock from "./components/ListBlock";
import Legends from "./components/Legends";
import Navbar from "./components/Navbar";

import selectionSort from "./algorithms/selectionSort";
import bubbleSort from "./algorithms/bubbleSort";
import insertionSort from "./algorithms/insertionSort";
import quickSort from "./algorithms/quickSort";
import heapSort from "./algorithms/heapSort";
import mergeSort from "./algorithms/mergeSort";

const App = () => {
  const [array, setArray] = useState([]);
  const [compare, setCompare] = useState([]);
  const [swap, setSwap] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [speed, setSpeed] = useState(1);
  const [size, setSize] = useState(1);
  const [algo, setAlgo] = useState("selectionSort");
  const [isSorting, setIsSorting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const resetArray = (size) => {
    const arr = [];
    for (let i = 0; i <= size * 10; i++) {
      arr.push(getRandomInt(5, 1.5 * 10 * size));
    }
    setArray(arr);
    setSorted([]);
    setCompare([]);
    setSwap([]);
    setIsSorting(false);
    setIsCompleted(false);
  };

  useEffect(() => {
    resetArray(size);
  }, [algo, size]);

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleSort = () => {
    setIsSorting(true);
    const algoSort = async (orders) => {
      for (let i = 0; i < orders.length; i++) {
        const [sets, arr, index] = orders[i];
        setCompare(sets);
        setSwap([]);
        if (index !== null) {
          setSorted((prev) => [...prev, index]);
        }
        if (arr) {
          setArray(arr);
          setSwap(sets);
        }

        await sleep(Math.floor(150 / speed));
      }
      setIsSorting(false);
      setIsCompleted(true);
    };
    switch (algo) {
      case "selectionSort":
        algoSort(selectionSort(array));
        break;
      case "bubbleSort":
        algoSort(bubbleSort(array));
        break;
      case "insertionSort":
        algoSort(insertionSort(array));
        break;
      case "quickSort":
        algoSort(quickSort(array));
        break;
      case "heapSort":
        algoSort(heapSort(array));
        break;
      case "mergeSort":
        algoSort(mergeSort(array));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Navbar
        handleSort={handleSort}
        resetArray={resetArray}
        speed={speed}
        setSpeed={setSpeed}
        size={size}
        setSize={setSize}
        algo={algo}
        setAlgo={setAlgo}
        isCompleted={isCompleted}
        isSorting={isSorting}
      />
      <ListBlock array={array} compare={compare} swap={swap} sorted={sorted} />
      <Legends algo={algo} />
    </div>
  );
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default App;
