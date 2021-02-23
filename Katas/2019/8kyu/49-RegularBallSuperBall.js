/**
 *
 * Regular Ball Super Ball
 * Create a class Ball.
 *
 * Ball objects should accept one argument for "ball type" when instantiated.
 *
 * If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
 *
 * ball1 = new Ball();
 * ball2 = new Ball("super");
 *
 * ball1.ballType     //=> "regular"
 * ball2.ballType     //=> "super"
 */

// Test Case
// Test.assertEquals(new Ball().ballType, "regular");
// Test.assertEquals(new Ball("super").ballType, "super");


// 版本1，使用构造函数
// var Ball = function(ballType) {
//     // your code goes here
//     // ES5 方式的默认参数
//     this.ballType = ballType || 'regular' ;
// };

// 版本2，使用class
class Ball {
    constructor(ballType = 'regular') {
        this.ballType = ballType ;
    }
}

console.log((new Ball()).ballType) ;
console.log(new Ball()) ;
console.log(new Ball('regular')) ;
console.log(new Ball('big')) ;
console.log(new Ball('small')) ;