Test.describe("call from 0:", function() {
  Test.it("If the left elevator is closer to the call, should return 'left'", function() {
      Test.assertEquals(elevator(0,1,0), 'left');
    });
  Test.it("If the right elevator is closer to the call, should return 'right'", function() {
      Test.assertEquals(elevator(0,1,1), 'right');
    });
  Test.it("If the right elevator is closer to the call, should return 'right'", function() {
    Test.assertEquals(elevator(0,1,2), 'right');
  });
  Test.it("If both elevators are on the same floor, should return 'right'", function() {
    Test.assertEquals(elevator(0,0,0), 'right');
  });
  Test.it("If both elevators are in equal distance from the call, should return 'right'", function() {
    Test.assertEquals(elevator(0,2,1), 'right');
  });
});