describe("arrayMadness", _ => {
  it("should work for fixed tests", _ => {
    Test.assertEquals(arrayMadness([4,5,6],[1,2,3]), true);
    Test.assertEquals(arrayMadness([5,6,7],[4,5,6]), false);
    Test.assertEquals(arrayMadness([4,5,6],[3,4,5]), false);
    Test.assertEquals(arrayMadness([3,4,5],[2,3,4]), false);
    Test.assertEquals(arrayMadness([2,3,4],[1,2,3]), false);
    Test.assertEquals(arrayMadness([1,2,3],[0,1,2]), true);
    Test.assertEquals(arrayMadness([5,3,2,4,1],[15]), false);
    Test.assertEquals(arrayMadness([2,5,3,4,1],[3,3,3,3,3]), false);
    Test.assertEquals(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), false);
    Test.assertEquals(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), true);
    Test.assertEquals(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), false);
  });
});