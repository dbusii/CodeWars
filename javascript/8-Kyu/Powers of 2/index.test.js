Test.describe("Example Tests", function(){
  Test.assertSimilar(powersOfTwo(0), [1])
  Test.assertSimilar(powersOfTwo(1), [1, 2])
  Test.assertSimilar(powersOfTwo(4), [1, 2, 4, 8, 16])
})