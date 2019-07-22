var c = new Cube(10);
Test.assertEquals(c.getSide(), 10, "Should be 10");
c = new Cube();
Test.assertEquals(c.getSide(), 0, "Should be 0");