Test.describe("Example tests",_=>{
Test.assertEquals(well(['bad', 'bad', 'bad']), 'Fail!');
Test.assertEquals(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
Test.assertEquals(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
});
