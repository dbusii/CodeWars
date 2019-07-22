Test.describe("reverseList", function(){
  Test.it("should reverse some sample arrays", function(){
    Test.assertSimilar(reverseList([1,2,3,4]), [4,3,2,1]);
    Test.assertSimilar(reverseList([3,1,5,4]), [4,5,1,3]);
  });
});