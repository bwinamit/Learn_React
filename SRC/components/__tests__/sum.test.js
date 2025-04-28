import { sum } from "../sum";

test("Gives the sum of two numbers", () => {
  //Assertion 
  expect(sum(1, 2)).toBe(3);
});