import swap from "./swap";

const selectionSort = (arr) => {
  const orders = [];
  const copy = arr.slice();

  for (let j = 0; j < copy.length; j++) {
    for (let k = j + 1; k < copy.length; k++) {
      orders.push([[j, k], null, null]);
      if (copy[j] > copy[k]) {
        swap(copy, j, k);
        orders.push([[j, k], copy.slice(), null]);
      }
    }
    orders.push([[null, null], null, j]);
  }

  return orders;
};

export default selectionSort;
