/**
 * Your task is to find the first element of an array that is not consecutive.
 *
 * E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
 *
 * If the whole array is consecutive then return null or Nothing.
 *
 * The array will always have at least 2 elements1 and all elements will be numbers.
 * The numbers will also all be unique and in ascending order.
 * The numbers could be positive or negative and the first non-consecutive could be either too!
 *
 * If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges
 *
 * 1) Can you write a solution that will return null for both [] and [ x ] though? ( This is not tested, but you can write your own example test. )
 */

// Test Case
// Test.describe('a simple example', function() {
//   const first = firstNonConsecutive([1,2,3,4,6,7,8])
//   Test.assertEquals(first, 6)
// })

/**
 * 从数组中找出第一个非连续的数字
 * 例如：2 3 4 5 8 9，2、3、4、5就是连续的，8不是连续的，所以8是第一个非连续的数字
 * 找到了，则返回这个数字，没有找到，返回null
 * @param arr
 */
function firstNonConsecutive (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        // 得到相邻的两个元素的差值
        var diff = arr[i + 1] - arr[i] ;
        // 如果两个元素的连续递增的，则差值为1，否则差值大于1
        if (diff > 1) {
            // 差值大于1，表示这是第一个非连续递增的元素
            // 直接返回这个元素
            return arr[i+1] ;
        }
    }

    // 元素全都是连续递增的，则返回null
    return null ;
}

console.log(firstNonConsecutive([1, 2, 3, 5])) ;
console.log(firstNonConsecutive([1, 2, 3, 4])) ;
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])) ;
console.log(firstNonConsecutive([-1, -2, 3, 4, 6, 8])) ;
console.log(firstNonConsecutive([-1, 0, 1, 2, 3, 4, 6, 8])) ;