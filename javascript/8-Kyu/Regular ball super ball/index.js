/*
Regular Ball Super Ball

Create a class Ball.

Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/

// Long solution

// var Ball = function(ballType) {
//   return typeof ballType === "string" ? this.ballType = "super": this.ballType = "regular"
// };

Short solution

var Ball = function(ballType) {
  this.ballType = ballType || "regular"
};