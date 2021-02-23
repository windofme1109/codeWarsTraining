/**
 * Your task is to sum the differences between consecutive pairs in the array in descending order.

 * For example: sumOfDifferences([2, 1, 10]) Returns 9

 * Descending order: [10, 2, 1]

 * Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

 * If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).
 *
 */

// Test case
// Test.describe("sumOfDifferences([1, 2, 10]", function() {
//   Test.assertEquals(sumOfDifferences([1, 2, 10]), 9);
// });
//
// Test.describe("sumOfDifferences([-3, -2, -1])", function() {
//   Test.assertEquals(sumOfDifferences([-3, -2, -1]), 2);
// });

function sumOfDifferences(arr) {
    var sum = 0 ;
    // 先对数组进行排序，降序
    arr.sort((a, b) => b - a) ;
    // 已经将数组为空和数组只有一个元素的情况考虑进去
    // 数对的数量是长度减1，所以如果只有一个元素，则数对数量为0，根本不会进入循环
    // 同理可见数组为空
    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i] - arr[i + 1] ;
    }
    return sum ;
}

console.log(sumOfDifferences([-3, -2, -1]));
console.log(sumOfDifferences([1, 2, 10]));
console.log(sumOfDifferences([]));
