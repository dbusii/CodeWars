function testing(actual, expected) {
    Test.assertEquals(actual, expected)
}
Test.describe("howMuchILoveYou",function() {
    Test.it("Basic tests",function() { 
        testing(howMuchILoveYou(7),"I love you")
        testing(howMuchILoveYou(3),"a lot")
        testing(howMuchILoveYou(6),"not at all")
})})
