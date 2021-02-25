/**
 *
 *
 * A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
 *
 * For example, take 153 (3 digits), which is narcisstic:
 *
 * 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 * and 1652 (4 digits), which isn't:
 *
 * 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
 * The Challenge:
 *
 * Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.
 *
 * Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
 *
 * Narcissistic Number 水仙花数只是自幂数的一种，严格来说3位数的3次幂数才称为水仙花数。
 * 自幂数是指一个 n 位数，它的每个位上的数字的 n 次幂之和等于它本身。（例如：当n为3时，有1^3 + 5^3 + 3^3 = 153，153即是n为3时的一个自幂数）
 *
 */

/**
 * 判断一个数字是否为水仙花数
 * @param value
 * @returns {boolean}
 */
function narcissistic(value) {
    const digit = String(value).split('');
    const power = digit.length;
    const ret = digit.reduce((acc, ele) => {
        return acc + Math.pow(ele * 1, power);
    }, 0);

    // 判断计算后的值是否与原始值相等，相等即为水仙花数
    return ret === value;
}


console.log(narcissistic(2));
console.log(narcissistic(7));
console.log(narcissistic(153));