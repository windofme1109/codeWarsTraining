/**
 *
 * In this kata you have to implement a base converter, which converts positive integers between arbitrary bases / alphabets. Here are some pre-defined alphabets:
 *
 * var Alphabet = {
 *  BINARY:        '01',
 *  OCTAL:         '01234567',
 * DECIMAL:       '0123456789',
 * HEXA_DECIMAL:  '0123456789abcdef',
 * ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
 * ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
 * ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
 * ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
 * };
 * The function convert() should take an input (string), the source alphabet (string) and the target alphabet (string). You can assume that the input value always consists of characters from the source alphabet. You don't need to validate it.
 *
 * Examples
 * // convert between numeral systems
 * convert("15", Alphabet.DECIMAL, Alphabet.BINARY); // should return "1111"
 * convert("15", Alphabet.DECIMAL, Alphabet.OCTAL); // should return "17"
 * convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
 * convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"
 *
 * // other bases
 * convert("0", Alphabet.DECIMAL, Alphabet.ALPHA); // should return "a"
 * convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); // should return "bb"
 * convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // should return "320048"
 * convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); // should return "SAME"
 * Additional Notes:
 *
 * The maximum input value can always be encoded in a number without loss of precision in JavaScript. In Haskell, intermediate results will probably be too large for Int.
 * The function must work for any arbitrary alphabets, not only the pre-defined ones
 * You don't have to consider negative numbers
 *
 */

var Alphabet = {
    BINARY:        '01',
    OCTAL:         '01234567',
    DECIMAL:       '0123456789',
    HEXA_DECIMAL:  '0123456789abcdef',
    ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

/**
 * 任意进制的转换
 * @param input
 * @param source
 * @param target
 * @returns {string|*}
 */
function convert(input, source, target) {
    const decimal = str2Decimal(input, source);
    return decimal2OtherRadix(decimal, target);

}

/**
 * 任意进制的字符串转换为十进制数字
 * @param str
 * @param radix
 * @returns {number}
 */
function str2Decimal(str, radix) {
    return str.split('').reduce((acc, ele, index) => {
        return acc + radix.indexOf(ele) * Math.pow(radix.length, str.length - 1 - index);
    }, 0);
}

/**
 * 十进制字符串转换为其他进制
 * @param str
 * @param targetRadix
 * @returns {string|*}
 */
function decimal2OtherRadix(str, targetRadix) {

    let num = str * 1;
    if (num === 0) {
        return targetRadix[num];
    }

    let radix = targetRadix.length;
    let ret = [];
    while (num > 0) {
        let quotient = Math.floor(num / radix);
        let remainder = num % radix;
        ret.push(remainder);

        num = quotient;
    }
    ret.reverse();

    return ret.map(item => {
        return targetRadix[item * 1];
    }).join('');

}

