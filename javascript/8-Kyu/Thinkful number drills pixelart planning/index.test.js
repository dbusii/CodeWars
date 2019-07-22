Test.describe("Basic tests",_=>{
Test.assertEquals(isDivisible(4050, 27), true);
Test.assertEquals(isDivisible(4066, 27), false);
Test.assertEquals(isDivisible(10000, 20), true);
Test.assertEquals(isDivisible(10005, 20), false);
Test.assertEquals(isDivisible(10005, 1), true);
})