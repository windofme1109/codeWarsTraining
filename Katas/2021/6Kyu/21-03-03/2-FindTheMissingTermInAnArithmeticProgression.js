/**
 *
 *
 * An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.
 *
 * You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.
 *
 * Example
 * findMissing([1, 3, 5, 9, 11]) == 7
 * PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!
 *
 */

var findMissing = function (list) {
    const diff = [];

    for (let i = 1; i < list.length; i++) {
        diff.push(list[i] - list[i - 1]);
    }
    const diffValue =diff[0] > 0 ? Math.max(...diff) : Math.min(...diff);
    let index = diff.findIndex(item => item === diffValue);

    return (list[index] + list[index + 1]) / 2;
}

console.log(findMissing([1, 3, 5, 9, 11]));
console.log(findMissing([11, 9, 5, 3, 1]));
console.log(findMissing([2, 4, 6, 10, 12]));