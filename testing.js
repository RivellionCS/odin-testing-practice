export { capitalize };
export { reverseString };
export { calculator };
export { caeserCipher };
export { analyzeArray };

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

function analyzeArray(array) {
  const arrayLength = array.length;
  const arrayMax = () => {
    let maximum = null;
    for (let i = 0; i < arrayLength; i++) {
      if (maximum === null) {
        maximum = array[i];
      } else if (maximum < array[i]) {
        maximum = array[i];
      }
    }
    return maximum;
  };
  const arrayMinimum = () => {
    let minimum = null;
    for (let i = 0; i < arrayLength; i++) {
      if (minimum === null) {
        minimum = array[i];
      } else if (minimum > array[i]) {
        minimum = array[i];
      }
    }
    return minimum;
  };
  const arrayAverage = () => {
    let total = 0;
    for (let i = 0; i < arrayLength; i++) {
      total += array[i];
    }
    return total / arrayLength;
  };

  const arrayObject = {
    average: arrayAverage(),
    min: arrayMinimum(),
    max: arrayMax(),
    length: arrayLength,
  };

  return arrayObject;
}
