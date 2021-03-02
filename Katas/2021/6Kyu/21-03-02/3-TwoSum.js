/**
 *
 * Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).
 *
 * For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
 *
 * The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
 *
 * Based on: http://oj.leetcode.com/problems/two-sum/
 *
 twoSum [1, 2, 3] 4 === (0, 2)
 *
 */

/**
 *
 * @param numbers
 * @param target
 * @returns {(*|number)[]|*[]}
 */
function twoSum(numbers, target) {
    const obj = {};
    for (let i = 0; i < numbers.length; i++) {
        let item = numbers[i];
        // target = x + y
        // 那么 x = target - y
        // y 是 numbers 中的元素，所以如果 obj 中没有 y，那么就将 x 作为 obj 的属性放入 obj 中，属性值为与 y 对应的索引
        // 如果 obj 中有 y，证明找到了符合条件的 x 和 y，终止循环，返回 x 和 y 或者其索引
        if (obj[item] === undefined) {

            let x = target - item;
            obj[x] = i;
        } else {
            return [obj[item], i];
        }
    }

    return [];

}

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([1, 2, 3, 4, 5, 6, 7], 11));
console.log(twoSum([10, 5, 2, 3, 7, 5], 10));