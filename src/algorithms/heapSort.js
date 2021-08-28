import swap from "./swap";

let orders = [];

const heapSort = (arr) => {
  orders = [];
  const copy = arr.slice();
  const n = copy.length;

  for (let j = Math.floor(n / 2) - 1; j >= 0; j--) {
    heapify(copy, n, j);
  }

  for (let k = n - 1; k > 0; k--) {
    swap(copy, k, 0);
    orders.push([k, 0, copy.slice(), null]);
    orders.push([null, null, null, k]);
    heapify(copy, k, 0);
  }

  orders.push([null, null, null, 0]);

  return orders;
};

const heapify = (arr, len, index) => {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  if (left < len && arr[largest] < arr[left]) {
    orders.push([left, largest, null, null]);
    largest = left;
  }

  if (right < len && arr[largest] < arr[right]) {
    orders.push([right, largest, null, null]);
    largest = right;
  }

  if (largest !== index) {
    swap(arr, largest, index);
    orders.push([largest, index, arr.slice(), null]);

    heapify(arr, len, largest);
  }
};

export default heapSort;
