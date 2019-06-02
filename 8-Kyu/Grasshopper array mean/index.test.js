describe('get average', function () {
  it('should return the average', function () {
    Test.assertEquals(findAverage([1]), 1)
    Test.assertEquals(findAverage([1, 3, 5, 7]), 4)
  })
})