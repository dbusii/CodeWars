
Test.describe('Fixed Tests', _ => {
  Test.it("Test", __ => {
    Test.assertSimilar(excludingVatPrice(230), 200.00);
    Test.assertSimilar(excludingVatPrice(123), 106.96);
  });
});