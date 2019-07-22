<?php

class PositiveSumTest extends TestCase {
  public function testExamples() {
    $this->assertEquals(15, positive_sum([1, 2, 3, 4, 5]));
    $this->assertEquals(13, positive_sum([1, -2, 3, 4, 5]));
    $this->assertEquals(0, positive_sum([]));
    $this->assertEquals(0, positive_sum([-1, -2, -3, -4, -5]));
    $this->assertEquals(9, positive_sum([-1, 2, 3, 4, -5]));
  }
}

?>