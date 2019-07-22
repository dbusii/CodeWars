Test.describe("Solution", function() {
  Test.it("should pass some sample tests", function() {
    Test.assertEquals(grader(0.7), "C");
    Test.assertEquals(grader(0.9), "A");
    Test.assertEquals(grader(0.6), "D");
  });
});