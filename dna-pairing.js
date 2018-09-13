function pairElement(str) {
  const strLength = str.length;
  let resultArray = [];

  for (let i = 0; i < strLength; i += 1) {
    let arrayForPairing = [];
    arrayForPairing.push(str[i]);

    switch (str[i]) {
      case "A":
        arrayForPairing.push("T");
        break;
      case "T":
        arrayForPairing.push("A");
        break;
      case "C":
        arrayForPairing.push("G");
        break;
      case "G":
        arrayForPairing.push("C");
        break;
    }

    resultArray.push(arrayForPairing);
  }

  return resultArray;
}

pairElement("GCG");
