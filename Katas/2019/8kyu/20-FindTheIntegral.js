/**
 *
 * Create a function that finds the integral of the expression passed.

 * In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.

 For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).

 Notes:

 The output should be a string.
 The coefficient and exponent is always a positive integer.
 */

// Test Case
// Test.assertEquals(integrate(3,2), "1x^3");
// Test.assertEquals(integrate(12,5), "2x^6");
// Test.assertEquals(integrate(20,1), "10x^2")
// Test.assertEquals(integrate(40,3), "10x^4")
// Test.assertEquals(integrate(90,2), "30x^3")

/**
 * 求积分 对ax^b积分，也就是求原函数。
 * 其中，a是coefficient，b是exponent，则原函数是
 * @param coefficient 系数
 * @param exponent 指数
 */
function integrate(coefficient, exponent) {
    // 原始指数
    var originalExponent = exponent + 1 ;
    // 原始系数
    var originalCoefficient = coefficient / originalExponent ;
    // 原函数
    var originalFun = `${originalCoefficient}x^${originalExponent}` ;
    //
    return originalFun ;
}

console.log(integrate(3, 2)) ;
console.log(integrate(90, 2)) ;
console.log(integrate(20, 1)) ;