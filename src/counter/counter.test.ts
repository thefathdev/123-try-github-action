import { test, expect } from "vitest";
import { counter } from "./counter";

test("counter increment the given number", () => {
  expect(counter(0, "increment")).toBe(1);
});
test("counter decrement the given number", () => {
  expect(counter(0, "decrement")).toBe(-1);
});
test("counter double the given number", () => {
  expect(counter(1, "double")).toBe(2);
});
