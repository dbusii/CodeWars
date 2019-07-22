Test.describe('Basic tests',_=>{
Test.assertEquals(logicalCalc([true, true, true, false], "AND"), false);
Test.assertEquals(logicalCalc([true, true, true, false], "OR"), true);
Test.assertEquals(logicalCalc([true, true, true, false], "XOR"), true);
Test.assertEquals(logicalCalc([true, true, false, false], "AND"), false);
Test.assertEquals(logicalCalc([true, true, false, false], "OR"), true);
Test.assertEquals(logicalCalc([true, true, false, false], "XOR"), false);
Test.assertEquals(logicalCalc([true, false, false, false], "AND"), false);
Test.assertEquals(logicalCalc([true, false, false, false], "OR"), true);
Test.assertEquals(logicalCalc([true, false, false, false], "XOR"), true);
Test.assertEquals(logicalCalc([true, true], "AND"), true);
Test.assertEquals(logicalCalc([true, true], "OR"), true);
Test.assertEquals(logicalCalc([true, true], "XOR"), false);
Test.assertEquals(logicalCalc([false, false], "AND"), false);
Test.assertEquals(logicalCalc([false, false], "OR"), false);
Test.assertEquals(logicalCalc([false, false], "XOR"), false);
Test.assertEquals(logicalCalc([false], "AND"), false);
Test.assertEquals(logicalCalc([false], "OR"), false);
Test.assertEquals(logicalCalc([false], "XOR"), false);
Test.assertEquals(logicalCalc([true], "AND"), true);
Test.assertEquals(logicalCalc([true], "OR"), true);
Test.assertEquals(logicalCalc([true], "XOR"), true);
})