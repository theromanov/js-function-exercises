"use strict";

// Task 1: Say Hello
// Description: Create a function that accepts a person's name as an argument and returns a greeting string in the format "Hello, Name!".

function sayHello(name) {
  return `Hello, ${name}!`;
}
// ----------------------

// Task 2: Return Neighboring Numbers
// Description: Create a function that accepts an integer and returns an array containing the previous number, the given number, and the next number.

function returnNeighboringNumbers(number) {
  return [number - 1, number, number + 1];
}

// ------------------------------
// Task 3: Get Math Result
// Description: Create a function that accepts two arguments: a base number and a count. The function should return a multiplication progression as a string, with each number separated by three hyphens (---).

// If the count is not a number or is less than or equal to zero, return the base number.

function getMathResult(base, count) {
  if (typeof count !== "number" || count <= 0) {
    return base;
  }

  let result = "";

  for (let i = 1; i <= count; i++) {
    result += i * base;

    if (i < count) {
      result += "---";
    }
  }

  return result;
}
