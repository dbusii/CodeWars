<?php
class SquareSumTestCases extends TestCase {
    public function testBasic() {
      $this->assertEquals(square_sum([1,2]), 5);
      $this->assertEquals(square_sum([0, 3, 4, 5]), 50);
      $this->assertEquals(square_sum([]), 0);
      $this->assertEquals(square_sum([-1,-2]), 5);
      $this->assertEquals(square_sum([-1,0,1]), 2);
    }
}
?>