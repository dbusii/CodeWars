describe('ordering food', () => {
  it('should define sandwiches and store a value', () => {
    Test.assertEquals(sandwiches, 4)
  })
  it('should define salads and store a value', () => {
    Test.assertEquals(salads, 6)
  })
  it('should define wraps and store a value', () => {
    Test.assertEquals(wraps, 5)
  })
  it('should define french fries and store a value', () => {
    Test.assertEquals(frenchFries, 10)
  })
})