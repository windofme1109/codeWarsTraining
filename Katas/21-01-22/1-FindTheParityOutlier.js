/**
 *
 * You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
 *
 * Examples
 * [2, 4, 0, 100, 4, 11, 2602, 36]
 * Should return: 11 (the only odd number)
 *
 * [160, 3, 1719, 19, 11, 13, -21]
 * Should return: 160 (the only even number)
 *
 */

/**
 * 在一个全是奇数或者偶数组成的数组中找出不一样的整数
 * @param integers
 * @returns {*}
 */
// function findOutlier(integers){
//
//     let target = 0;
//     for (let i = 0; i < integers.length; i++) {
//         let ret = addTwoWithAbs(integers[i], integers[i + 1]);
//         if (ret % 2 === 1) {
//             target = i;
//             break;
//         }
//     }
//
//     if (target === 0) {
//         if (addTwoWithAbs(integers[target], integers[target + 2]) % 2 === 0) {
//             return integers[target + 1];
//         } else {
//             return integers[target];
//         }
//     }
//
//     return integers[target + 1];
// }

function addTwoWithAbs(x, y) {
    return Math.abs(x) + Math.abs(y);
}

/**
 * 实现方式二 使用filter() 实现
 * @param integers
 */
// function findOutlier(integers) {
//     const odd = integers.filter((item) => item % 2 === 0);
//     const even = integers.filter((item) => item % 2 !== 0);
//
//     return odd.length === 1 ? odd[0] : even[0];
// }

function findOutlier(integers) {
    const odd = [];
    const even = [];
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            odd.push(integers[i]);
        } else {
            even.push(integers[i]);
        }
    }

    return odd.length === 1 ? odd[0] : even[0];
}
console.log(findOutlier([2, 4, 0, -100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
console.log(findOutlier([161, 3, 1719, -19, 12, 13, -21]));