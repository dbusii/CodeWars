Test.describe("Example Tests", function()
{
  Test.assertEquals(workNeeded(60, [[1,0]]), "Easy Money!");
  Test.assertEquals(workNeeded(60, [[0,0]]), "I need to work 1 hour(s) and 0 minute(s)");
  Test.assertEquals(workNeeded(141, [[1,55], [0,25]]), "I need to work 0 hour(s) and 1 minute(s)");
});