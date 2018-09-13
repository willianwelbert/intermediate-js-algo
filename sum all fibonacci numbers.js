function sumFibs(num) {
  
  let fibonacci = [1,1];
  let resultArray = [];

  //loop from 1 to num always adding previous acc
  for (let i = 2; fibonacci[i-1] <= num; i ++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
  }

  // fibonacci.pop();

  console.log(fibonacci);

  let oddFibonacci = fibonacci.filter((checkOdd) => checkOdd % 2 == 1);

  console.log(oddFibonacci);

  oddFibonacci.pop();

  console.log("odd popped " + oddFibonacci);

  return oddFibonacci.reduce((acc, currentValue) => acc + currentValue, 0)

  // if (isodd) push to array
  //reduce the array to count acc plus current value

  // return OddFiboArray;
}

sumFibs(10);
