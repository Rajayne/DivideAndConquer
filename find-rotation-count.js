function findRotationCount(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    if (arr[leftIdx] < arr[rightIdx] || arr[leftIdx] === arr[rightIdx]) {
      return leftIdx;
    } else {
      leftIdx += 1;
    }
  }
}

module.exports = findRotationCount;
