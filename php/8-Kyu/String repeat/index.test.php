<?php

class MyTestCases extends TestCase
{
    public function testThatSomethingShouldHappen()
    {
      $this->assertEquals(repeatStr(3, "*"), "***");
      $this->assertEquals(repeatStr(2, "@"), "@@");
      $this->assertEquals(repeatStr(1, "!"), "!");
    }
}

?>