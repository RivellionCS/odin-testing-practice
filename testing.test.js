import { capitalize } from "./testing";
import { reverseString } from "./testing";

test('capitalize the word "Amongus" to "AMONGUS"', () => {
  expect(capitalize("Amongus")).toBe("AMONGUS");
});

test('capitalize the word "Jerma" to "JERMA"', () => {
  expect(capitalize("Jerma")).toBe("JERMA");
});
