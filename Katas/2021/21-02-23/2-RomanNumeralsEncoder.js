/**
 *
 * Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.
 *
 * Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.
 * In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
 *
 * Example:
 *
 * solution(1000); // should return 'M'
 * Help:
 *
 * Symbol    Value
 * I          1
 * V          5
 * X          10
 * L          50
 * C          100
 * D          500
 * M          1,000
 *
 * Remember that there can't be more than 3 identical symbols in a row.
 *
 * 将整数转换为 罗马数字
 * 计数规则
 * 相同的数字连写、所表示的数等于这些数字相加得到的数、如：Ⅲ=3；
 * 小的数字在大的数字的右边、所表示的数等于这些数字相加得到的数、 如：Ⅷ=8、Ⅻ=12；
 * 小的数字（限于 I、X 和 C）在大的数字的左边、所表示的数等于大数减小数得到的数、如：Ⅳ=4、Ⅸ=9；
 * 正常使用时、连写的数字重复不得超过三次；
 * 在一个数的上面画一条横线、表示这个数扩大 1000 倍
 */

/**
 * 整数转换为罗马数字 （最大到 3999）
 * @param number
 * @returns {string}
 */
// function solution(number){
//     // 一位整数的罗马数字写法 1 - 9
//     const oneDigitNums = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
//     // 整十数的罗马数字写法 10、20、30、... 90
//     const twoDigitNums = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
//     // 整百数的罗马数字写法 100、200、300、... 900
//     const threeDigitNums = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
//     // 整千数的罗马数字写法 1000、2000、3000
//     // 因为单个的罗马数字最大表示 1000，而重复的符号不能超过三个，所以 整千数最多到 3000
//     const fourDigitNums = ['', 'M', 'MM', 'MMM'];
//
//     const digitArr = String(number).split('').map(item => item * 1);
//     const length = digitArr.length;
//     if (length === 4) {
//         return fourDigitNums[digitArr[0]]
//             + threeDigitNums[digitArr[1]]
//             + twoDigitNums[digitArr[2]]
//             + oneDigitNums[digitArr[3]];
//     } else if (length === 3) {
//         return threeDigitNums[digitArr[0]]
//             + twoDigitNums[digitArr[1]]
//             + oneDigitNums[digitArr[2]];
//     } else if (length === 2) {
//         return  twoDigitNums[digitArr[0]]
//             + oneDigitNums[digitArr[1]];
//     } else {
//         return oneDigitNums[digitArr[0]];
//     }
//
//
// }

/**
 * 整数转罗马数字的优化
 * @param number
 * @returns {string}
 */
function solution(number) {
    const oneDigitNums = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    // 整十数的罗马数字写法 10、20、30、... 90
    const twoDigitNums = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    // 整百数的罗马数字写法 100、200、300、... 900
    const threeDigitNums = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    let ret = '';
    // 对千位数进行转换
    while (number > 1000) {
        ret += 'M';
        // 每转换完一次，就减去 1000，最终能得到百位数
        number = number - 1000;
    }

    // 千位数转换完成后，转换百位数
    ret += threeDigitNums[Math.floor(number / 100)];
    // 百位数转换完后，获得十位数
    number = number % 100;

    // 百位数转换完成后，转换十位数
    ret += twoDigitNums[Math.floor(number / 10)];
    // 十位数转换完后，获得个位数
    number = number % 10;

    ret += oneDigitNums[number];

    return ret;
}


console.log(solution(2008));
console.log(solution(1990));
console.log(solution(18));
console.log(solution(101));
console.log(solution(489));
console.log(solution(187));