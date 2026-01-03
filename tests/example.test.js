// sum.test.js

// Function to add three numbers
function sum(a, b, c) {
  return a + b + c;
}

// Jest test
test("adds three numbers", () => {
  expect(sum(2, 3, 4)).toBe(9); // 2 + 3 + 4 = 9
});