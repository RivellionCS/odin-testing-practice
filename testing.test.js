import { capitalize } from "./testing";

test('capitalize the word "Amongus"', () => {
  expect(capitalize("Amongus")).toBe("AMONGUS");
});

test('capitalize the word "Jerma"', () => {
  expect(capitalize("Jerma")).toBe("JERMA");
});
