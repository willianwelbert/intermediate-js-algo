function uniteUnique(...arr) {
  let resultArray = [];
  arr.map(providedArrays =>
    providedArrays.map(function(eachNumber) {
      if (resultArray.includes(eachNumber)) {
        console.log("repeated");
      } else {
        resultArray.push(eachNumber);
      }
    })
  );

  return resultArray;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
