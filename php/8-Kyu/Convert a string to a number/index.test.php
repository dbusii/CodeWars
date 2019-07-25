<?php
class MyTestCases extends TestCase
{
    public function testFixedTests() {
      $this->assertEquals(1234, stringToNumber("1234"));
      $this->assertEquals(605, stringToNumber("605"));
      $this->assertEquals(1405, stringToNumber("1405"));
      $this->assertEquals(-7, stringToNumber("-7"));
    }
}
?>