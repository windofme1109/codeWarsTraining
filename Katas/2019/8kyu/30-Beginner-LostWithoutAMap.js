/**
 *
 * Given an array of integers, return a new array with each value doubled.
 *
 * For example:
 *
 * [1, 2, 3] --> [2, 4, 6]
 *
 * For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.
 */

// Test Case
// Test.describe("Example tests",()=>{
//   Test.assertDeepEquals(maps([1, 2, 3]), [2, 4, 6]);
//   Test.assertDeepEquals(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
//   Test.assertDeepEquals(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);
// });

// 版本1，直接使用map()即可
/**
 * 将数组中的元素变成原来的二倍
 * @param x
 */
// function maps(x) {
//     return x.map(item => item * 2) ;
//
// }

// 版本2，使用for循环或者forEach()
function maps(x) {
    var ret = [] ;
    for (let i = 0; i < x.length; i++) {
        ret.push(x[i] * 2) ;
    }

    return ret ;

}