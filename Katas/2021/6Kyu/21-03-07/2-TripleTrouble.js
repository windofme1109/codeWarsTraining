/**
 *
 * Write a function
 *
 * tripledouble(num1,num2)
 * which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.
 *
 * If this isn't the case, return 0
 *
 * Examples
 * tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and
 * // num2 has straight double 99s
 *
 * tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2
 *
 * tripledouble(12345, 12345) == 0
 *
 * tripledouble(666789, 12345667) == 1
 *
 */

/**
 * num1 找出连续三个相同的数字，num2 中找出连续相同的两个数字，
 * 判断找出的两个数字是否相同
 * @param num1
 * @param num2
 * @returns {number}
 */
function tripledouble(num1, num2) {
    // 匹配字符串中是否出现连续几个相同的数字
    let triple = String(num1).match(/(0{3})|(1{3})|(2{3})|(3{3})|(4{3})|(5{3})|(6{3})|(7{3})|(8{3})|(9{3})/g) || [];
    let double = String(num2).match(/(0{2})|(1{2})|(2{2})|(3{2})|(4{2})|(5{2})|(6{2})|(7{2})|(8{2})|(9{2})/g) || [];
    for (let key of triple) {
        let num = key.slice(0, 2);
        if (double.includes(num)) {
            return 1;
        }
    }
    return 0;
}


// console.log(tripledouble(1222345, 12345))
// console.log(tripledouble(451999277, 41177722899))
console.log(tripledouble(111222333444555, 100));
console.log(tripledouble(12333444555, 100));