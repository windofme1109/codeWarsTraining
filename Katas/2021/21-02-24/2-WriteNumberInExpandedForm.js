/**
 * Write Number in Expanded Form
 * You will be given a number and you will need to return it as a string in Expanded Form. For example:
 *
 * expandedForm(12); // Should return '10 + 2'
 * expandedForm(42); // Should return '40 + 2'
 * expandedForm(70304); // Should return '70000 + 300 + 4'
 * NOTE: All numbers will be whole numbers greater than 0.
 *
 *
 */

/**
 * 将一个数字拆解为 n * 1000 + m * 100 + ... 的形式
 * @param num
 * @returns {string}
 */
function expandedForm(num) {

    // 数字转换为字符串
    let strNum = '' + num;
    // 获得数字的位数
    let n = strNum.length;
    // 存放数字每一位
    let digitArr = [];

    for (let i = 1; i <= strNum.length; i++) {
        // 任何一个数字都可以写成 n * 1000 + m * 100 + ... 的形式
        let t = Math.pow(10, n - 1);
        // 获得每一位
        let digit = Math.floor(num / t);
        digitArr.push(digit);
        // 去除最高位
        num = num - digit * t;
        n--;
    }
    const ret =digitArr.map((digit, index) => {
        return digit * Math.pow(10, strNum.length - index - 1);
    });

    return ret.filter(item => item !== 0).join(' + ');

}

/**
 * 将数字转换为中文形式的数字
 * @param num
 * @returns {string}
 */
function numToChinese(num) {

    const ones = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    // 对应 2 - 9 位数
    const units = ['十', '百','千','万','十万','百万','千万','亿'];

    let strNum = '' + num;
    let n = strNum.length;
    let digitArr = [];
    for (let i = 1; i <= strNum.length; i++) {
        let t = Math.pow(10, n - 1);
        let digit = Math.floor(num / t);
        digitArr.push(digit);
        num = num - digit * t;
        n--;
    }

    const chineseDigit = digitArr.map((item, index) => {
        if (item === 0 || index === strNum.length - 1) {
            // 如果当前位数是 0，直接取零，
            // 如果是最后一位，那么直接取其所对应的中文数字
            return ones[item];
        }
        // 数字 + 单位
        return ones[item] + units[strNum.length - index - 2];
    })

    let chineseNum = chineseDigit.join('');

    // 去除多余的零
    chineseNum = chineseNum.replace(/零+/g, '零');
    // 去除末尾的零
    chineseNum = chineseNum.replace(/(零+)$/, '');
    // 将一十开头的数字替换位十
    chineseNum = chineseNum.replace(/^(一十)/, '十');
    return chineseNum;
}

// console.log(expandedForm(12));
// console.log(expandedForm(42));
// console.log(expandedForm(70304));
// console.log(expandedForm(1200));
// console.log(expandedForm(50004));

console.log(numToChinese(1234));
console.log(numToChinese(12345));
console.log(numToChinese(10005));
console.log(numToChinese(12000));
console.log(numToChinese(100800));
console.log(numToChinese(200800));
console.log(numToChinese(18));
console.log(numToChinese(100400078));
console.log(numToChinese(1005000));
console.log(numToChinese(10));
console.log(numToChinese(100));
console.log(numToChinese(1000));
console.log(numToChinese(10000));
console.log(numToChinese(100000));
console.log(numToChinese(1000000));
console.log(numToChinese(10000000));
