 describe("Club Doorman", function(){
   it("Basic Tests", function(){
    Test.assertSimilar( passTheDoorMan("lettuce") , 60);
    Test.assertSimilar( passTheDoorMan("hill"), 36);
    Test.assertSimilar( passTheDoorMan("apple"), 48);
  });
 });   