/**
 * The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

 * Examples
 * numberToPower(3,2)  // -> 9 ( = 3 * 3 )
 * numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
 * numberToPower(10,6) // -> 1000000
 */

// Test Case
// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).
//
// Examples
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000

// 版本1，使用循环实现
/**
 * 不使用Math.power()函数，实现一个乘方函数
 * @param number
 * @param power
 * @returns {number}
 */
// function numberToPower(number, power) {
//
//     if (power === 0) {
//         return 1 ;
//     } else {
//         let ret = 1 ;
//         for (let i = 1; i <= power; i++) {
//             ret = ret * number ;
//         }
//
//         return ret ;
//     }
// }

// 版本2，使用递归
function numberToPower(number, power) {
    if (power === 0) {
        return 1 ;
    } else {
        return number * numberToPower(number, power - 1) ;
    }
}

console.log(numberToPower(10, 2)) ;
console.log(numberToPower(2, 3)) ;
console.log(numberToPower(2, 0)) ;