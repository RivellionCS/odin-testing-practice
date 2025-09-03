import { capitalize } from "./testing";
import { reverseString } from "./testing";
import { calculator } from "./testing";
import { caeserCipher } from "./testing";

test('capitalize the string "Amongus" to "AMONGUS"', () => {
  expect(capitalize("Amongus")).toBe("AMONGUS");
});

test('capitalize the string "Jerma" to "JERMA"', () => {
  expect(capitalize("Jerma")).toBe("JERMA");
});

test('reverse the string "Spider-man" to "nam-redipS"', () => {
  expect(reverseString("Spider-man")).toBe("nam-redipS");
});

test('reverse the string "Venom" to "moneV"', () => {
  expect(reverseString("Venom")).toBe("moneV");
});

test("2 added to 3 should be 5", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("8 subtracted from 20 should be 12", () => {
  expect(calculator.subtract(20, 8)).toBe(12);
});

test("63 divided by 9 should be 7", () => {
  expect(calculator.divide(63, 9)).toBe(7);
});

test("5 multiplied by 8 shuold be 40", () => {
  expect(calculator.multiply(5, 8)).toBe(40);
});

test('caeserCipher("xyz", 3) should return "abc"', () => {
  expect(caeserCipher("xyz", 3)).toBe("abc");
});

test('caeserCipher("HeLLo", 3) should return "KhOOr"', () => {
  expect(caeserCipher("HeLLo", 3)).toBe("KhOOr");
});

test('caeserCipher("Hello, World!", 3) should return "Khoor, Zruog!"', () => {
  expect(caeserCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray([1,8,3,4,2,6]) should return an object with the following properties {average: 4, min: 1, max: 8, length: 6}", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toBe({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
