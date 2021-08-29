const insertionSort = (arr) => {
  const orders = [];
  const copy = arr.slice();

  for (let j = 1; j < copy.length; j++) {
    let k = j - 1;
    const key = copy[j];
    orders.push([[j, null], null, null]);
    while (copy[k] > key && k >= 0) {
      orders.push([[j, k], null, null]);
      copy[k + 1] = copy[k];
      k = k - 1;
    }
    copy[k + 1] = key;
    if (k + 1 !== j) {
      orders.push([[k + 1, null], copy.slice(), null]);
    }
  }

  // for (let index in copy) {
  //   orders.push([[null, null], null, index]);
  // }
  for (let index = 0; index < copy.length; index++) {
    orders.push([[null, null], null, index]);
  }

  return orders;
};

export default insertionSort;
