Test.describe("Basic Tests", function(){
  Test.assertEquals(divisibleByThree('123'), true, "Should return true if the sum of the given digits is divisible by 3.")
  Test.assertEquals(divisibleByThree('19254'), true, "Should return true if the sum of the given digits is divisible by 3.")
  Test.assertEquals(divisibleByThree('88'), false, "Should return false if the sum of the given digits is not divisible by 3.")
  Test.assertEquals(divisibleByThree('1'), false, "Should return false if the sum of the given digits is not divisible by 3.")
});
