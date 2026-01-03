// sum.test.js

// Function to add three numbers
function sum(a, b, c) {
  return a + b + c;
}

// Jest test
test("adds three numbers", () => {
  expect(sum(2, 3, 5)).toBe(10); // 2 + 3 + 5 = 10
});