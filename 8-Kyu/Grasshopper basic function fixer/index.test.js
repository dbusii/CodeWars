describe('fix add five', () => {
  it('fixed tests', () => {
    Test.assertEquals(addFive(5), 10)
    Test.assertEquals(addFive(0), 5)
    Test.assertEquals(addFive(-5), 0)
  })
})