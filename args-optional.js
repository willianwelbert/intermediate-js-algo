function addTogether() {

  function validNumber (arg) {
    return (Number.isInteger(arg) ? arg : undefined );
  }
 
  const firstNumber = validNumber(arguments[0]);


  if (firstNumber && arguments[1] === undefined){
    return function (comeAgain) {
      const testedComeAgain = validNumber(comeAgain);
      return (testedComeAgain) ? firstNumber + testedComeAgain : undefined;
    };
  }

  const secondNumber = validNumber(arguments[1]);

  return (firstNumber === undefined || secondNumber === undefined) ? undefined : firstNumber + secondNumber;

  

}

addTogether(2);