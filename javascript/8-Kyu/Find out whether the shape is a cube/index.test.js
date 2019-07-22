Test.assertEquals(cubeChecker(56.3, 1), false);
Test.assertEquals(cubeChecker(-1, 2), false);
Test.assertEquals(cubeChecker(8, 3), false);
Test.assertEquals(cubeChecker(8, 2), true);
Test.assertEquals(cubeChecker(-8,-2), false);
Test.assertEquals(cubeChecker(0, 0), false);
Test.assertEquals(cubeChecker(1, 5),  false);
Test.assertEquals(cubeChecker(125, 5), true);
Test.assertEquals(cubeChecker(125,-5), false);
