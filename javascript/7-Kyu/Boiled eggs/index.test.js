describe('Boiled Eggs', function() {
  it('should calculate the cooking time', function() {
    Test.assertEquals(cookingTime(0), 0, '0 eggs');
    Test.assertEquals(cookingTime(5), 5, '5 eggs');
    Test.assertEquals(cookingTime(10), 10, '10 eggs');
  });
});