/**
 *
 * Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!
 *
 * Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.
 *
 * The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.
 *
 * Examples:
 * list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
 * list_squared(42, 250) --> [[42, 2500], [246, 84100]]
 * The form of the examples may change according to the language, see Example Tests: for more details.
 *
 *
 */


/**
 *
 * @param m
 * @param n
 * @returns {[]}
 */
function listSquared(m, n) {
    let ret = [];

    for (let i = m; i <= n; i++) {
        let divisors = findAllDivisors(i);
        let squareSum = divisors.reduce((acc, ele) => {
            return acc + ele ** 2;
        }, 0);
        let root = Math.sqrt(squareSum);
        if (root === Math.floor(root)) {
            ret.push(
                [i, squareSum]
            )
        }
    }

    return ret;
}

function findAllDivisors(num) {
    let ret = [];

    for (let i = 1; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) {
            ret.push(i);
        }
    }

    ret.push(num);

    return ret;
}

console.log(listSquared(1, 250));
console.log(listSquared(42, 250));
console.log(listSquared(250, 500));