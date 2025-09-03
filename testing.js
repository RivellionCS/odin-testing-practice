export { capitalize };
export { reverseString };

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
