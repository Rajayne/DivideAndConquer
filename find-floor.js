function findFloor(arr, val) {
  let rightIdx = arr.length - 1;
  while (rightIdx >= 0) {
    if (arr[rightIdx] < val) {
      return arr[rightIdx];
    } else {
      rightIdx -= 1;
    }
  }
  return -1;
}

module.exports = findFloor;

// findFloor([1, 2, 8, 10, 10, 12, 19], 9); // 8
// findFloor([1, 2, 8, 10, 10, 12, 19], 20); // 19
// findFloor([1, 2, 8, 10, 10, 12, 19], 0); // -1
