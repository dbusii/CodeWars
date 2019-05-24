Test.describe("Basic tests",() => {
  Test.assertEquals(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
  Test.assertEquals(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
  Test.assertEquals(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
  Test.assertEquals(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);  
});