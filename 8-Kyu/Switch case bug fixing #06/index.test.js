Test.describe('Fixed Tests', _ => {
  Test.assertEquals(evalObject({a:1,b:1,operation:'+'}), 2, 'Return the evaluated string as a number!');
  Test.assertEquals(evalObject({a:1,b:1,operation:'-'}), 0, 'Return the evaluated string as a number!');
  Test.assertEquals(evalObject({a:1,b:1,operation:'/'}), 1, 'Return the evaluated string as a number!');
  Test.assertEquals(evalObject({a:1,b:1,operation:'*'}), 1, 'Return the evaluated string as a number!');
  Test.assertEquals(evalObject({a:1,b:1,operation:'%'}), 0, 'Return the evaluated string as a number!');
  Test.assertEquals(evalObject({a:1,b:1,operation:'^'}), 1, 'Return the evaluated string as a number!');
});
