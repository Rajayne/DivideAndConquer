function sortedFrequency(arr, val) {
  let frequency = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) frequency += 1;
  }
  if (frequency === 0) {
    return -1;
  } else {
    return frequency;
  }
}

module.exports = sortedFrequency;
