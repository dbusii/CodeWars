<?php
class SummationTest extends TestCase {
  public function testThatSummationWorksForExampleTests() {
    $this->assertEquals(summation(1), 1);
    $this->assertEquals(summation(2), 3);
    $this->assertEquals(summation(3), 6);
    $this->assertEquals(summation(4), 10);
    $this->assertEquals(summation(5), 15);
  }
}
?>