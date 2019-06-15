Test.expect(isReallyNaN(37) === false)
Test.expect(isReallyNaN('37') === false)
Test.expect(isReallyNaN(NaN) === true)
Test.expect(isReallyNaN(undefined) === false)