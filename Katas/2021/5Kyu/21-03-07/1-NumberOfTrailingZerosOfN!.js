/**
 *
 * Write a program that will calculate the number of trailing zeros in a factorial of a given number.
 *
 * N! = 1 * 2 * 3 * ... * N
 *
 * Be careful 1000! has 2568 digits...
 *
 * For more info, see: http://mathworld.wolfram.com/Factorial.html
 *
 * Examples
 * zeros(6) = 1
 * # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
 *
 * zeros(12) = 2
 * # 12! = 479001600 --> 2 trailing zeros
 * Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros
 *
 *
 */

/**
 * 解法 1
 * @param n
 * @returns {number}
 */
function zeros (n) {
    let res = 0;
    let base = 5;

    while (n >= base) {
        res += Math.floor(n / base);

        base = base * 5;
    }

    return res;
}

/**
 * 解法 2
 * @param n
 * @returns {number}
 */
function zerso(n) {
    let res = 0;
    while (n >= 5) {
        n = Math.floor(n / 5);
        res += n;
    }

    return res;
}
console.log(zeros(6));
console.log(zeros(10));
console.log(zeros(0));
console.log(zeros(30));
console.log(zeros(100));
console.log(zeros(10000));
