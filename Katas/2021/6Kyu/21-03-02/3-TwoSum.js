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
        console.log(obj);
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