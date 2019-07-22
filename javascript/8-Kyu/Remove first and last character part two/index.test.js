Test.describe("Tests", function(){

Test.assertEquals(array(''), null);
Test.assertEquals(array('1'), null);
Test.assertEquals(array('1, 3'), null);
Test.assertEquals(array('1,2,3'), '2');
  
});