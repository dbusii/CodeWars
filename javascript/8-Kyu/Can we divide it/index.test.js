Test.assertSimilar(isDivideBy(-12, 2, -6), true);
Test.assertSimilar(isDivideBy(-12, 2, -5), false);
Test.assertSimilar(isDivideBy(45, 1, 6), false);
Test.assertSimilar(isDivideBy(45, 5, 15), true);
Test.assertSimilar(isDivideBy(4, 1, 4), true);
Test.assertSimilar(isDivideBy(15, -5, 3), true);