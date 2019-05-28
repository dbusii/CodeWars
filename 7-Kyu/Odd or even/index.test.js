Test.describe('Fixed tests', _ => {
  Test.it('Edge tests', _ => {
    Test.assertEquals(oddOrEven([0]), 'even')
    Test.assertEquals(oddOrEven([1]), 'odd')
    Test.assertEquals(oddOrEven([]), 'even')
  });
  
  Test.it('Even tests', _ => {
    Test.assertEquals(oddOrEven([0, 1, 5]), 'even')
    Test.assertEquals(oddOrEven([0, 1, 3]), 'even')
    Test.assertEquals(oddOrEven([1023, 1, 2]), 'even')
  });
  
  Test.it('Negative Even tests', _ => {
    Test.assertEquals(oddOrEven([0, -1, -5]), 'even')
    Test.assertEquals(oddOrEven([0, -1, -3]), 'even')
    Test.assertEquals(oddOrEven([-1023, 1, -2]), 'even')
  });
  
  Test.it('Odd tests', _ => {
    Test.assertEquals(oddOrEven([0, 1, 2]), 'odd')
    Test.assertEquals(oddOrEven([0, 1, 4]), 'odd')
    Test.assertEquals(oddOrEven([1023, 1, 3]), 'odd')
  });
  
  Test.it('Negative Odd tests', _ => {
    Test.assertEquals(oddOrEven([0, -1, 2]), 'odd')
    Test.assertEquals(oddOrEven([0, 1, -4]), 'odd')
    Test.assertEquals(oddOrEven([-1023, -1, 3]), 'odd')
  });
});