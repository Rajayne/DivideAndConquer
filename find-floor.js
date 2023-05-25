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

function findFloorConstraint(arr, val, low = 0, high = arr.length - 1) {
  if (low > high) return 0;
  if (val >= arr[high]) return arr[high];

  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === val) return arr[mid];

  if (mid > 0 && arr[mid - 1] <= val && val < arr[mid]) {
    return arr[mid - 1];
  }

  if (val < arr[mid]) {
    return findFloor(arr, val, mid - 1, high);
  }
  return findFloor(arr, val, mid + 1, high);
}

module.exports = { findFloor, findFloorConstraint };
