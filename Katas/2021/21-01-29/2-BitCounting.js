/**
 *
 *
 * Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
 *
 * Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 *
 */


// var countBits = function(n) {
//
//     // 取商
//     let quotient = Math.floor(n / 2);
//     // 取余数
//     let remainder = n % 2;
//     n = quotient;
//     let binaryArr =[remainder];
//
//     while (quotient > 0) {
//         quotient = Math.floor(n / 2);
//         remainder = n % 2;
//         n = quotient;
//         binaryArr.push(remainder);
//     }
//
//     let ret = {
//         0: 0,
//         1: 0
//     }
//     // 统计 1 和 0 出现的次数
//     binaryArr.forEach(item => {
//         ret[item] += 1;
//     })
//     // return binaryArr.reverse().join('');
//     return ret[1];
// };

/**
 * 十进制转换为二进制后，统计1的数量
 * @param n
 * @returns {number}
 */
var countBits = function(n) {
    // toString() 可以接收 2 - 36 之间的整数作为参数，表示将原始的十进制数字转换为几进制数字字符串
    // 默认转换为十进制的数字字符串
    const binary = n.toString(2);

    // let count = 0;
    // binary.split('').forEach(item => {
    //     if (item === '1') {
    //         count += 1;
    //     }
    // })
    // return count;

    return binary.replace(/0+/g, '').length;

}

console.log(countBits(10));
console.log(countBits(8));
console.log(countBits(4));
console.log(countBits(11));
console.log(countBits(13));
console.log(countBits(14));
console.log(countBits(1234));