// For backwards compatibility on existing solutions
defaultExample = (typeof defaultExample === 'undefined') ? Default : defaultExample;
restExample = (typeof restExample === 'undefined') ? Rest : restExample;
spreadExample = (typeof spreadExample === 'undefined') ? Spread : spreadExample;

console.log('Default')
Test.assertEquals(defaultExample(3, 7), 10)
Test.assertEquals(defaultExample(3), 10)
Test.assertEquals(defaultExample(5), 12)

console.log('Rest')
Test.assertEquals(restExample(3,'14',6), 6)
Test.assertEquals(restExample(5,'854',7,4), 15)
Test.assertEquals(restExample(9), 0)

console.log('Spread')
Test.assertEquals(spreadExample(...[1,2,3]), 6)
Test.assertEquals(spreadExample(...[6,6,6]), 18)
Test.assertEquals(spreadExample(...[1,1,1]), 3)
