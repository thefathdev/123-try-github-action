import { test, expect } from "vitest";
import { counter } from "./counter";

test("counter increment the given number", () => {
  expect(counter(0, "increment")).toBe(1);
});
