Test.describe("Example Tests",_=>{
Test.assertEquals(hexToDec("1"), 1);
Test.assertEquals(hexToDec("a"), 10);
Test.assertEquals(hexToDec("10"), 16);
Test.assertEquals(hexToDec("FF"), 255);
Test.assertEquals(hexToDec("-C"), -12);
})