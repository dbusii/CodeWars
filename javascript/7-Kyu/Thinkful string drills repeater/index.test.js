Test.describe("Basic Tests", function(){
  Test.assertEquals(repeater('a', 5), 'aaaaa')
  Test.assertEquals(repeater('Na', 16), 'NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa')
  Test.assertEquals(repeater('Wub ', 6), 'Wub Wub Wub Wub Wub Wub ')
})
