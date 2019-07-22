<?php
class MyTestCases extends TestCase
{
    public function testSampleTests() {
      $this->assertSame('67', numberToString(67));
    }
}
?>