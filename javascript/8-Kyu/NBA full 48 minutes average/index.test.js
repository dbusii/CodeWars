describe("Solution", () => {
  it("should test for something", () => {
    Test.assertEquals(pointsPer48(12, 20), 28.8)
    Test.assertEquals(pointsPer48(10, 10), 48.0)
    Test.assertEquals(pointsPer48(5, 17), 14.1)
    Test.assertEquals(pointsPer48(0, 0), 0)
    Test.assertEquals(pointsPer48(30.8, 34.7), 42.6)  // Russell Westbrook 1/15/17
    Test.assertEquals(pointsPer48(22.9, 33.8), 32.5)  // Kemba Walker 1/15/17
  });
});