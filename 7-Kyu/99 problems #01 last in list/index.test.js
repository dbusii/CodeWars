describe("last", function(){
  it("should work with non-empty lists", function(){
    Test.assertEquals( last([1,2,3]), 3, "last([1,2,3]) == 3");
  });
  it("should work with empty lists", function(){
    Test.assertEquals( last([]), null, "last( [] ) == null");
  });
});