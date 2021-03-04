/**
 *
 * In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.
 *
 * Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.
 *
 * Here is the algorithm:
 *
 * Double every other digit, scanning from right to left, starting from the second digit (from the right).
 *
 * Another way to think about it is: if there are an even number of digits, double every other digit starting with the first; if there are an odd number of digits, double every other digit starting with the second:
 *
 * 1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]
 *
 * 12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]
 *
 * 891 ==> [8, 9*, 1] ==> [8, 18, 1]
 * If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9 from it):
 *
 * [8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]
 * or:

 * [8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]
 * Sum all of the final digits:

 * [8, 9, 1] ==> 8 + 9 + 1 = 18
 * Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.
 *
 * 18 (modulus) 10 ==> 8 , which is not equal to 0, so this is not a valid credit card number
 *
 *
 */

function validate(n){
    const cardNumArr = String(n).split('');

    // 每隔一位，对数字乘 2
    let double = cardNumArr.map((num, index) => {
        if (cardNumArr.length % 2 === 0) {
            if (index % 2 === 0) {
                let t = num * 2;

                return t > 9 ? (t - 9) : t;
            }

            return num * 1;
        } else {
            if (index % 2 === 1) {
                let t = num * 2;

                return t > 9 ? (t - 9) : t;
            }

            return num * 1;
        }

    });
    // 求和
    let sum = double.reduce((acc, ele) => acc + ele, 0);

    // 求和结果如果能被 10 整除，则返回 true，证明这是一个有效的信用卡卡号
    return sum % 10 === 0;

}


console.log(validate(1714));
console.log(validate(891));
;
;