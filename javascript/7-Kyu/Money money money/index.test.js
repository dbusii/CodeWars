function testing(actual, expected) {
    Test.assertEquals(actual, expected)
}

Test.describe("calculateYears",function() {
Test.it("Basic tests",function() { 
    testing(calculateYears(1000, 0.05, 0.18, 1100), 3)
    testing(calculateYears(1000,0.01625,0.18,1200), 14)
    testing(calculateYears(1000,0.05,0.18,1000), 0)
})})