function fearNotLetter(str) {
  // return str;

  //find out wich unicode is the str[0]
  const indexZero = str.charCodeAt(0);

  //find out wich unicode is the str[-1]
  const lastIndex = str.charCodeAt(-1);

  //The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

  const stringSize = str.length;

  //run a loop that checks if str[i] is equal to the correct unicode, if not, return the missing letter
  for (let i = 0; i < stringSize; i += 1) {
    let currentChar = str.charCodeAt(i);
    if (currentChar !== indexZero + i) {
      let missingChar = currentChar - 1;
      console.log(missingChar);
      return String.fromCharCode(missingChar);
    }
  }
}

fearNotLetter("abce");
