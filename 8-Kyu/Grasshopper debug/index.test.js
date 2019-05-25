describe ('celsius converter', function () {
  it ('should get correct answer', function () {
    Test.assertEquals(weatherInfo(50), '10 is above freezing temperature')
    Test.assertEquals(weatherInfo(23),  '-5 is freezing temperature')
 })
})