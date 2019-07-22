Test.describe("Basic Tests", function() {
  Test.assertEquals(cockroachSpeed(1.08), 30);
  Test.assertEquals(cockroachSpeed(1.09), 30);
  Test.assertEquals(cockroachSpeed(0), 0);
});
