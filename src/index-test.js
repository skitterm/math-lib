import { describe, Try } from "riteway";
import { add, subtract, multiply, divide, squareRoot, exponent } from ".";

describe("add()", async assert => {
  assert({
    given: "two positive integers, 2 and 3",
    should: "return 5",
    actual: add(2, 3),
    expected: 5
  });

  assert({
    given: "two negative integers, -2 and -4",
    should: "return 6",
    actual: add(-2, -4),
    expected: -6
  });

  assert({
    given: "first argument is non-number",
    should: "throw error",
    actual: Try(add, null, 3).toString(),
    expected: "TypeError: Argument is not a number"
  });

  assert({
    given: "second argument is non-number",
    should: "throw error",
    actual: Try(add, 3).toString(),
    expected: "TypeError: Argument is not a number"
  });
});

describe("subtract()", async assert => {
  assert({
    given: "two positive integers, 3 and 2",
    should: "return 1",
    actual: subtract(3, 2),
    expected: 1
  });

  assert({
    given: "two negative integers, -3 and -5",
    should: "return 2",
    actual: subtract(-3, -5),
    expected: 2
  });

  assert({
    given: "first argument is non-number",
    should: "throw error",
    actual: Try(subtract, null, 3).toString(),
    expected: "TypeError: Argument is not a number"
  });

  assert({
    given: "second argument is non-number",
    should: "throw error",
    actual: Try(subtract, 3).toString(),
    expected: "TypeError: Argument is not a number"
  });
});

describe("multiply()", async assert => {
  assert({
    given: "two integers, 3 and 2",
    should: "return 6",
    actual: multiply(3, 2),
    expected: 6
  });

  assert({
    given: "first argument is non-number",
    should: "throw error",
    actual: Try(multiply, null, 3).toString(),
    expected: "TypeError: Argument is not a number"
  });

  assert({
    given: "second argument is non-number",
    should: "throw error",
    actual: Try(multiply, 3).toString(),
    expected: "TypeError: Argument is not a number"
  });
});

describe("divide()", async assert => {
  assert({
    given: "two integers, 6 and 2",
    should: "return 3",
    actual: divide(6, 2),
    expected: 3
  });

  assert({
    given: "first argument is non-number",
    should: "throw error",
    actual: Try(divide, null, 3).toString(),
    expected: "TypeError: Argument is not a number"
  });

  assert({
    given: "second argument is non-number",
    should: "throw error",
    actual: Try(divide, 3).toString(),
    expected: "TypeError: Argument is not a number"
  });
});

describe("squareRoot()", async assert => {
  assert({
    given: "one integer, 9",
    should: "return 3",
    actual: squareRoot(9),
    expected: 3
  });

  assert({
    given: "argument is non-number",
    should: "throw error",
    actual: Try(squareRoot, null).toString(),
    expected: "TypeError: Argument is not a number"
  });
});

describe("exponent()", async assert => {
  assert({
    given: "2 to the 3rd power",
    should: "return 8",
    actual: exponent(2, 3),
    expected: 8
  });

  assert({
    given: "first argument is non-number",
    should: "throw error",
    actual: Try(exponent, null, 3).toString(),
    expected: "TypeError: Argument is not a number"
  });

  assert({
    given: "second argument is non-number",
    should: "throw error",
    actual: Try(exponent, 3).toString(),
    expected: "TypeError: Argument is not a number"
  });
});

/*
TODO:
*/
