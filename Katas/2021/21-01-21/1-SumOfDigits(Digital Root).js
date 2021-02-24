/**
 *
 * Digital root is the recursive sum of all the digits in a number.

 * Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
 *
 * Examples
 * 16  -->  1 + 6 = 7
 * 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
 * 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
 * 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
 *
 */

/**
 * while 循环版本
 * @param n
 * @returns {number|*}
 */
// function digital_root(n) {
//
//     if (n < 10) {
//         return n;
//     }
//
//     let digitArr = n.toString().split('');
//     let length = digitArr.length;
//     let sum = 0;
//     while (length !== 1) {
//         sum = arrSum(digitArr);
//         digitArr = sum.toString().split('');
//         length = digitArr.length;
//     }
//
//     return sum;
// }

function arrSum(arr) {
    return arr.reduce((a, b) => {
        return a * 1 + b * 1;
    });
}

/**
 * 递归版本
 * @param n
 * @returns {*}
 */
function digital_root(n) {
    if (n < 10) {
        return n;
    }
    const temp = n.toString().split('').reduce((acc, d) => acc + d * 1, 0);
    return digital_root(temp);
}

/**
 * while 循环改进版
 * @param n
 * @returns {*}
 */
function digital_root(n) {
    if (n < 10) {
        return n;
    }
    while (n > 9) {
        n = n.toString().split('').reduce((acc, d) => acc + d * 1, 0);
    }

    return n;
}

console.log(digital_root(1234));
console.log(digital_root(493193));
console.log(digital_root(942));
console.log(digital_root(0));
