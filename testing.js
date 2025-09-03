export { capitalize };
export { reverseString };
export { calculator };
export { caeserCipher };

function capitalize(string) {
  return string.toUpperCase();
}

function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

function caeserCipher(string, shiftFactor) {
  let finalString = "";
  const finalShift = shiftFactor % 26;

  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      finalString += shiftCapital(string.charCodeAt(i), finalShift);
    } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
      finalString += shiftLower(string.charCodeAt(i), finalShift);
    } else {
      finalString += string[i];
    }
  }

  function shiftCapital(charCode, shiftFinal) {
    let finalCharCode = charCode + shiftFinal;
    if (finalCharCode > 90) {
      finalCharCode = ((finalCharCode - 64) % 26) + 64;
    }
    return String.fromCharCode(finalCharCode);
  }

  function shiftLower(charCode, shiftFinal) {
    let finalCharCode = charCode + shiftFinal;
    if (finalCharCode > 122) {
      finalCharCode = ((finalCharCode - 96) % 26) + 96;
    }
    return String.fromCharCode(finalCharCode);
  }

  return finalString;
}
