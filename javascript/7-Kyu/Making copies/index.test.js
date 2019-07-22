t = [1,2,3,4];
tCopy = copyList(t);

Test.assertSimilar(t, tCopy, "Copy unsuccessful");
t[1] += 5;
Test.assertNotSimilar(t, tCopy, "The array was not properly copied");