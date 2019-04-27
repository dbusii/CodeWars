Test.expect(shortcut('hello') == 'hll', 'encode failed. Your result: '+shortcut('hello')+' Expected result: hll')
Test.expect(shortcut('how are you today?') == 'hw r y tdy?', 'shortcut did not work properly');
Test.expect(shortcut('complain') == 'cmpln', 'shortcut did not work properly');
Test.expect(shortcut('never') == 'nvr', 'shortcut did not work properly');
