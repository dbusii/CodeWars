// PHPUnit Test Examples:
// TODO: Replace examples and use TDD development by writing your own tests
class SecretMessageTestCase extends TestCase
{
    // test function names should start with "test"
    public function testNormalGreet() {
      $this->assertEquals('Hello, Jim!', greet('Jim'));
      $this->assertEquals('Hello, Jane!', greet('Jane'));
      $this->assertEquals('Hello, Simon!', greet('Simon'));
    }

    public function testSpecialGreet() {
      $this->assertEquals('Hello, my love!', greet('Johnny'));
    }
}