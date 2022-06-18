const approximate = (array, num) => {
  let i = 0;
  let minDiff = 1000;
  let ans;
  for (i in array) {
    const m = Math.abs(num - array[i]);
    if (m < minDiff) {
      minDiff = m;
      ans = array[i];
    }
  }
  return ans;
};

export default approximate;
