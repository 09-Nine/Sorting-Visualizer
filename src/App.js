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
  const [speed, setSpeed] = useState(0);
  const [algo, setAlgo] = useState("selectionSort");
  const [isSorting, setIsSorting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [size, setSize] = useState(50);

  const resetArray = () => {
    const arr = [];
    for (let i = 0; i <= 50; i++) {
      arr.push(getRandomInt(5, 2 * 50));
    }
    setArray(arr);
    setSorted([]);
    setCompare([]);
    setSwap([]);
    setIsSorting(false);
    setIsCompleted(false);
  };

  useEffect(() => {
    resetArray();
  }, [algo]);

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleSort = () => {
    setIsSorting(true);
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

        await sleep(speed * 50);
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
        algo={algo}
        setAlgo={setAlgo}
        isCompleted={isCompleted}
        isSorting={isSorting}
      />
      <ListBlock array={array} compare={compare} swap={swap} sorted={sorted} />
      <Legends />
    </div>
  );
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default App;
