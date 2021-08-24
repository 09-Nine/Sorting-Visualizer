const swap = (arr, j, k) => {
  const temp = arr[j];
  arr[j] = arr[k];
  arr[k] = temp;
};

export default swap;
