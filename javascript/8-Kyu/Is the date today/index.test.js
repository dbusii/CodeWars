var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

Test.assertEquals(isToday(new Date()), true);
Test.assertEquals(isToday(tomorrow), false);
Test.assertEquals(isToday(yesterday), false);