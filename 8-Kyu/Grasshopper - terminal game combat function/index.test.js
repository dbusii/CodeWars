Test.describe("The combat() function", function () {
  Test.it("should work for some example tests", function () {
    Test.assertEquals(combat(100, 5), 95);
    Test.assertEquals(combat(92, 8), 84);
    Test.assertEquals(combat(20, 30), 0, "Health cannot go below 0");
  });
});