Test.assertEquals(closeCompare(4, 5), -1)
Test.assertEquals(closeCompare(5, 5), 0)
Test.assertEquals(closeCompare(6, 5), 1)
Test.assertEquals(closeCompare(-6, -5), -1)

Test.assertEquals(closeCompare(2, 5, 3), 0)
Test.assertEquals(closeCompare(8.1, 5, 3), 1)
Test.assertEquals(closeCompare(1.99, 5, 3), -1)
