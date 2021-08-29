import swap from "./swap";

const bubbleSort = (arr) => {
  const copy = arr.slice();
  const orders = [];

  for (let j = 0; j < copy.length; j++) {
    // let isSwap = false;
    for (let k = 0; k < copy.length - 1 - j; k++) {
      orders.push([[k, k + 1], null, null]);
      if (copy[k] > copy[k + 1]) {
        swap(copy, k, k + 1);
        orders.push([[k, k + 1], copy.slice(), null]);
        // isSwap = true;
      }
    }

    orders.push([[null, null], null, copy.length - j - 1]);

    // if (isSwap === false) {
    //   break;
    // }
  }
  return orders;
};

export default bubbleSort;
