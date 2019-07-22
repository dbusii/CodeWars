describe("Basic tests",_=>{
  Test.assertEquals(disariumNumber(89),"Disarium !!");
  Test.assertEquals(disariumNumber(564),"Not !!");
  Test.assertEquals(disariumNumber(1024),"Not !!");
  Test.assertEquals(disariumNumber(135),"Disarium !!");
  Test.assertEquals(disariumNumber(136586),"Not !!");
});