Test.describe("Basic tests", _=>{
  Test.assertEquals(problem("hello"), "Error");
  Test.assertEquals(problem(1), 56);
  Test.assertEquals(problem(5), 256);
  Test.assertEquals(problem(0), 6);
  Test.assertEquals(problem(1.2), 66);
  Test.assertEquals(problem(3), 156);
  Test.assertEquals(problem("RyanIsCool"), "Error");
  Test.assertEquals(problem(-3), -144);
  Test.assertEquals(problem(""), "Error");
  Test.assertEquals(problem(0.03), 7.5);
})