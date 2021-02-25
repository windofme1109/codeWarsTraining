/**
 *
 * Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
 *
 * Examples:
 * Input: 42145 Output: 54421
 *
 * Input: 145263 Output: 654321
 *
 * Input: 123456789 Output: 987654321
 *
 */

/**
 *
 * @param n
 * @returns {number}
 */
function descendingOrder(n) {

    if (n < 0) {
        // 要求是非0的整数，所以在这里进行判断
        return ;
    }

    let str = ('' + n).split('');

    str.sort(function(a, b) {
        return (1 * b - 1 * a);
    });

    return 1 * str.join('');
}

console.log(descendingOrder(547));
console.log(descendingOrder(42145));