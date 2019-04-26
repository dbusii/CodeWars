describe("Your 'xor' function/operator", _ => {
  it("should work for the four basic cases described above", _ => {
    Test.assertEquals(xor(false, false), false, "false xor false === false");
    Test.assertEquals(xor(true, false), true, "true xor false === true");
    Test.assertEquals(xor(false, true), true, "false xor true === true");
    Test.assertEquals(xor(true, true), false, "true xor true === false");
    Test.assertNotEquals(xor(true, true), true, "'xor' is NOT identical to 'or'");
  });
});