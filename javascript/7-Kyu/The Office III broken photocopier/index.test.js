Test.describe("Example tests",_=>{
Test.assertEquals(broken("1"), "0");
Test.assertEquals(broken("10000000101101111110011001000"), "01111111010010000001100110111");
Test.assertEquals(broken("100010"), "011101");
});