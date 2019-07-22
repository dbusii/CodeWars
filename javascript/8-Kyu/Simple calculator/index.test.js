Test.assertEquals(calculator(1,2,"+"), 3, "calculate");
Test.assertEquals(calculator(1,2,"-"), -1, "calculate");
Test.assertEquals(calculator(3,5,"*"), 15, "calculate");
Test.assertEquals(calculator(6,2,"/"), 3, "calculate");
Test.assertEquals(calculator(6,2,"$"), "unknown value", "calculate"); 
Test.assertEquals(calculator(6,"h","*"), "unknown value", "calculate");   
     
