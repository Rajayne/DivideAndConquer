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

function findRotationCountConstraint(arr, low = 0, high = arr.length - 1) {
  if (high < low) return 0;
  if (high === low) return low;
  let mid = Math.floor((low + high) / 2);

  // Check if element (mid+1) is minimum element.
  // Consider the cases like [3, 4, 5, 1, 2]
  if (mid < high && arr[mid + 1] < arr[mid]) return mid + 1;

  // Check if mid itself is minimum element
  if (mid > low && arr[mid] < arr[mid - 1]) {
    return mid;
  }

  // Left half or right half
  if (arr[high] > arr[mid]) {
    return findRotationCount(arr, low, mid - 1);
  }

  return findRotationCount(arr, mid + 1, high);
}

module.exports = { findRotationCount, findRotationCountConstraint };
