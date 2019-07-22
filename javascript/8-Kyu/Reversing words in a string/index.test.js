Test.describe('Basic Examples',_=>{
Test.assertEquals(reverse('I am an expert at this'), 'this at expert an am I');
Test.assertEquals(reverse('This is so easy'), 'easy so is This');
Test.assertEquals(reverse('no one cares'), 'cares one no');
Test.assertEquals(reverse(''), '');
Test.assertEquals(reverse('CodeWars'), 'CodeWars');
})