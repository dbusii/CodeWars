Test.describe("Example tests",_=>{
Test.assertEquals(meeting(['X', 'O', 'X']), 1);
Test.assertEquals(meeting(['O','X','X','X','X']), 0);
Test.assertEquals(meeting(['X','X','X','X','X']), 'None available!');
});