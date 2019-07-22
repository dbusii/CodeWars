<php
class smallest extends TestCase
{
    public function test() {
      $this->assertEquals(smallestInteger([3, 5, 10, 1, 4, 55]), 1);
      $this->assertEquals(smallestInteger([0]), 0);
    }
}
?>