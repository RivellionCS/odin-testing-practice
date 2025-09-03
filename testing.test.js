import { capitalize } from "./testing";
import { reverseString } from "./testing";

test('capitalize the string "Amongus" to "AMONGUS"', () => {
  expect(capitalize("Amongus")).toBe("AMONGUS");
});

test('capitalize the string "Jerma" to "JERMA"', () => {
  expect(capitalize("Jerma")).toBe("JERMA");
});
