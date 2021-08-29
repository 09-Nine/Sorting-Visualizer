let orders = [];

const mergeSort = (arr) => {
  orders = [];
  const copy = arr.slice();

  mergeSortAlgo(copy, 0, copy.length - 1);

  for (let index = 0; index < copy.length; index++) {
    orders.push([[null, null], null, index]);
  }

  return orders;
};

const mergeSortAlgo = (arr, start, end) => {
  if (start >= end) {
    return;
  }

  const m = start + Math.floor((end - start) / 2);
  mergeSortAlgo(arr, start, m);
  mergeSortAlgo(arr, m + 1, end);

  const left = arr.slice(start, m + 1);
  const right = arr.slice(m + 1, end + 1);

  let i = 0,
    j = 0,
    k = start;

  while (i < left.length && j < right.length) {
    orders.push([[start + i, m + 1 + j], null, null]);
    if (left[i] < right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
    orders.push([[k], arr.slice(), null]);
  }

  while (i < left.length) {
    orders.push([[start + i], null, null]);
    arr[k] = left[i];
    k++;
    i++;
    orders.push([[k], arr.slice(), null]);
  }

  while (j < right.length) {
    orders.push([[m + 1 + j], null, null]);
    arr[k] = right[j];
    k++;
    j++;
    orders.push([[k], arr.slice(), null]);
  }
};

export default mergeSort;
