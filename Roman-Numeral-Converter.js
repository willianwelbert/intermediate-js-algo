function convertToRoman(num) {
  //1 = I // 5 = V // 10 = X // 50 = L // 100 = C // 500 = D // 1000 = M
  //substraction only happens at IV - IX - XL - XC - CD - CM

  const numerals = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let resultString = "";

  if (num > 3999 || num < 1) {
    throw "non convertable";
  }

  for (let i = 0; num > 0; ) {
    if (num - values[i] >= 0) {
      resultString = resultString.concat(numerals[i]);
      num -= values[i];
      console.log(resultString);
      console.log(num);
    } else {
      i += 1;
    }
  }

  //return a string with .toUpperCase();
  return resultString;
}

convertToRoman(36);

//Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.
