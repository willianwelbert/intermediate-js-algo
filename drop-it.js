function dropElements(arr, func) {
  // Drop them elements.
  let resultArray = [];

  let test = arr.map(func);
  const arrSize = arr.length;

  for (let i = 0; i < arrSize; i += 1) {
    if (test[i]) {
      return arr.slice(arr[i]);
    }
  }

  return resultArray;
}

dropElements([0, 1, 0, 1], function(n) {
  return n === 1;
});
