var year = 2013;
var month = 11;//Date class is 0 based, so 11 = December
var day = 24;
Test.assertEquals(timeForMilkAndCookies(new Date(year, month, day)), true);
    
year = 2013;
month = 10;
day = 24;
Test.assertEquals(timeForMilkAndCookies(new Date(year, month, day)), false);