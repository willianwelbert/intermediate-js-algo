function telephoneCheck(str) {
  const weirdCharsRegex = /[^() -\d]/g;
  const allWeirds = str.match(weirdCharsRegex);

  if (allWeirds !== null) {
    return false;
  }

  const everyCharRegex = /./g;
  const everyCharArray = str.match(everyCharRegex);

  if (everyCharArray[0] === "(" && everyCharArray[4] !== ")") {
    return false;
  } else if (everyCharArray[0] !== "(" && everyCharArray[3] === ")") {
    return false;
  } else if (everyCharArray[0] === "-") {
    return false;
  } else if (everyCharArray[5] === ")" && everyCharArray[1] !== "(") {
    return false;
  }

  const numberRegex = /\d/g;
  let numbersOnly = str.match(numberRegex);

  if (numbersOnly.length === 10) {
    return true;
  } else if (numbersOnly.length === 11 && numbersOnly[0] === "1") {
    return true;
  } else {
    return false;
  }
}

telephoneCheck("(555)5(55?)-5555");
