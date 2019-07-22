Test.describe("Basic tests",_=>{
Test.assertEquals(howManyDalmatians(26), "More than a handful!");
Test.assertEquals(howManyDalmatians(8), "Hardly any");
Test.assertEquals(howManyDalmatians(14), "More than a handful!");
Test.assertEquals(howManyDalmatians(80), "Woah that's a lot of dogs!");
Test.assertEquals(howManyDalmatians(100), "Woah that's a lot of dogs!");
Test.assertEquals(howManyDalmatians(101), "101 DALMATIANS!!!");
})