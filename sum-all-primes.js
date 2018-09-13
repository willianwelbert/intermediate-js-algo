function sumPrimes(num) {
  let resultArray = [];

  function primeNumber (number) {
    for (let i=2; i<number; i++){
      if (number % i === 0)
        return false;
      }
        return true;
    }

  //loop through numbers from 0 to num
  for (let j=2; j <= num; j++){
    //check if a given number is a prime number
    if (primeNumber(j)){
      resultArray.push(j);
    }
    
   }

  console.log(resultArray);

    
  return resultArray.reduce((acc, current) => acc + current);
}

sumPrimes(10);