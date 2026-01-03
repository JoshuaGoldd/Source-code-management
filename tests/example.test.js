function sum(a, b) {
  return a + b;
}

test("adds two numbers", () => {
  expect(sum(3, 3)).toBe(6);
});
