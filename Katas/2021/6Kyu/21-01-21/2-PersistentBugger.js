/**
 *
 * Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
 *
 * For example:
 *
 * persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
 * // and 4 has only one digit
 *
 * persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
 * // 1*2*6 = 12, and finally 1*2 = 2
 *
 * persistence(4) === 0 // because 4 is already a one-digit number
 *
 */

/**
 * 接收一个正整数，将每一位的数字相乘，得到一个新的数字
 * 再执行同样的操作，直到这个数字变成一位
 * 记录操作的次数
 * @param num
 */
function persistence(num) {
    let count = 0;
    if (num < 10) {
        return count;
    }

    while (num > 9) {
        count++;
        num = num.toString().split('').reduce((acc, d) => acc * (1 * d), 1);
    }

    return count;
}

console.log(persistence(999));
console.log(persistence(20));
console.log(persistence(39));
console.log(persistence(4));