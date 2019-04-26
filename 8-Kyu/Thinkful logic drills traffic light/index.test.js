describe("Sample tests", function(){
  Test.assertEquals(updateLight("green"), "yellow");
  Test.assertEquals(updateLight("yellow"), "red");
  Test.assertEquals(updateLight("red"), "green");
});