Test.describe("Basic tests", function() {
  Test.assertSimilar(symmetricPoint([0,0], [1,1]), [2, 2]);
  Test.assertSimilar(symmetricPoint([2, 6], [-2, -6]), [-6, -18]);
  Test.assertSimilar(symmetricPoint([10, -10], [-10, 10]), [-30, 30]);
  Test.assertSimilar(symmetricPoint([1, -35], [-12, 1]), [-25, 37]);
  Test.assertSimilar(symmetricPoint([1000, 15], [-7, -214]), [-1014, -443]);
  Test.assertSimilar(symmetricPoint([0, 0], [0, 0]), [0, 0]);
});