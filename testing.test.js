import { capitalize } from "./testing";
import { reverseString } from "./testing";

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
