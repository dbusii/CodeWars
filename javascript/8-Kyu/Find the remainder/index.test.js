Test.describe('Remainder Function', function(){
  it('Should handle arguments and math as defined in specificaitons', function(){
    Test.assertEquals(remainder(17,5), 2, 'Returned value should be the value left over after dividing as much as possible.');
    Test.assertEquals(remainder(13, 72), remainder(72, 13), 'The order the arguments are passed should not matter.');
    Test.expect(isNaN(remainder(1, 0)), 'Divide by zero should return NaN');
    Test.expect(isNaN(remainder(0, 0)), 'Divide by zero should return NaN');
  });
});