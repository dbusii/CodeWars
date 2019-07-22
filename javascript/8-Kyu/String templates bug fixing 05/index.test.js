Test.describe('Fixed Tests', _ => {
  Test.assertEquals(buildString('Cheese','Milk','Chocolate'), 'I like Cheese, Milk, Chocolate!', 'Return the correct String');
  Test.assertEquals(buildString('Cheese','Milk'), 'I like Cheese, Milk!', 'Return the correct String');
  Test.assertEquals(buildString('Chocolate'), 'I like Chocolate!', 'Return the correct String');
});