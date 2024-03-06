import { sum } from "../components/sum";

test("Sum function should calculate the sum", () => {
  const result = sum(2, 5);
  //Asertion
  expect(result).toBe(7);
});
