Test.describe("Basic tests",_=>{
Test.assertEquals(bonusTime(10000, true), '£100000');
Test.assertEquals(bonusTime(25000, true), '£250000');
Test.assertEquals(bonusTime(10000, false), '£10000');
Test.assertEquals(bonusTime(60000, false), '£60000');
Test.assertEquals(bonusTime(2, true), '£20');
Test.assertEquals(bonusTime(78, false), '£78');
Test.assertEquals(bonusTime(67890, true), '£678900');
})