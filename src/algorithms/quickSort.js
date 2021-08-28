import swap from "./swap";

let orders = [];

const quickSort = (arr) => {
  const copy = arr.slice();
  orders = [];
  quickSortALgo(copy, 0, copy.length - 1);

  return orders;
};

const quickSortALgo = (arr, start, end) => {
  if (start >= end) {
    if (start === end) {
      orders.push([null, null, null, start]);
    }
    return;
  }
  const pivot = start;
  let j = start + 1;
  for (let k = start + 1; k <= end; k++) {
    orders.push([pivot, k, null, null]);
    if (arr[k] < arr[pivot]) {
      swap(arr, k, j);
      orders.push([k, j, arr.slice(), null]);
      j++;
    }
  }

  swap(arr, pivot, j - 1);
  orders.push([pivot, j - 1, arr.slice(), null]);
  orders.push([null, null, null, j - 1]);
  quickSortALgo(arr, start, j - 2);
  quickSortALgo(arr, j, end);
};

export default quickSort;
