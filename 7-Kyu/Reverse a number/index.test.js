Test.describe("Sample tests", _=>{
  Test.assertEquals(reverseNumber(123), 321)
  Test.assertEquals(reverseNumber(-123), -321, 'Negative Numbers should be preserved')
  Test.assertEquals(reverseNumber(1000), 1, 'Should handle numbers ending with "0"')
  Test.assertEquals(reverseNumber(4321234), 4321234)
  Test.assertEquals(reverseNumber(5), 5)
  Test.assertEquals(reverseNumber(0), 0)
  Test.assertEquals(reverseNumber(98989898), 89898989)
});
