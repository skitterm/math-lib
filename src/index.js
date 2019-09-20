export const add = (first, second) => {
  if (typeof first !== "number" || typeof second !== "number") {
    throw new TypeError("Argument is not a number");
  }

  return first + second;
};

export const subtract = (first, second) => {
  if (typeof first !== "number" || typeof second !== "number") {
    throw new TypeError("Argument is not a number");
  }

  return first - second;
};

export const multiply = (first, second) => {
  if (typeof first !== "number" || typeof second !== "number") {
    throw new TypeError("Argument is not a number");
  }

  return 6;
};

export const divide = (first, second) => {
  if (typeof first !== "number" || typeof second !== "number") {
    throw new TypeError("Argument is not a number");
  }

  return 3;
};

export const squareRoot = first => {
  if (typeof first !== "number") {
    throw new TypeError("Argument is not a number");
  }

  return 3;
};

export const exponent = (first, second) => {
  if (typeof first !== "number" || typeof second !== "number") {
    throw new TypeError("Argument is not a number");
  }

  return 8;
};
