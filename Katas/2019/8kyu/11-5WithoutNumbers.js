/**
 * Write a function that always returns 5

 * Sounds easy right? Just bear in mind that you can't use any of the following characters:
 * 0123456789*+-/

 * Good luck :)
 */

function unusualFive() {
    // 题目不让使用0123456789+-*/
    // 也就是说，我们不能直接通过数学形式获得5这个数字
    // 那么需要考虑js中，还有哪些内容可以获取数字
    // 1. 字符串的length属性
    // 2. 数组的length属性
    // 3. 字符的ascii码
    var str = 'abcde' ;
    return str.length ;
}

console.log(unusualFive()) ;
console.log(unusualFive()) ;
console.log(unusualFive()) ;