describe("Basic tests", function(){
Test.assertEquals(oddBall(["even",4,"even",7,"even",55,"even",6,"even",10,"odd",3,"even"]), true)
Test.assertEquals(oddBall(["even",4,"even",7,"even",55,"even",6,"even",9,"odd",3,"even"]), false)
Test.assertEquals(oddBall(["even",10,"odd",2,"even"]), true)
});