Test.assertSimilar(hello('johN'), 'Hello, John!', "returns 'Hello, John!' when given 'johN'")
Test.assertSimilar(hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'")
Test.assertSimilar(hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given")
Test.assertSimilar(hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty String" )