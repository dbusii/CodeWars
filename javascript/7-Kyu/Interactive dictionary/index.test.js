let d = new Dictionary();

d.newEntry('Apple', 'A fruit');
Test.assertEquals(d.look('Apple'), 'A fruit');

d.newEntry('Soccer', 'A sport');
Test.assertEquals(d.look('Soccer'), 'A sport');
Test.assertEquals(d.look('Hi'), 'Can\'t find entry for Hi');
Test.assertEquals(d.look('Ball'), 'Can\'t find entry for Ball');

d.newEntry('soccer', 'a sport');
Test.assertEquals(d.look('soccer'), 'a sport');