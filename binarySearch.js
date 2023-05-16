const arr = [1, 3, 5, 6, 7, 9, 10, 15];

function binarySearch(arr, val) {
  let lower = 0;
  let upper = arr.length - 1;
  while (lower <= upper) {
    let middle = Math.floor((lower + upper) / 2);
    if (val === arr[middle]) return middle;

    if (val > arr[middle]) {
      lower = middle + 1;
    }

    if (val < arr[middle]) {
      upper = middle - 1;
    }
  }

  return -1;
}
console.log(binarySearch(arr, 7));
