/**
 *
 * Welcome.
 *
 * In this kata you are required to, given a string, replace every letter with its position in the alphabet.
 *
 * If anything in the text isn't a letter, ignore it and don't return it.
 *
 * "a" = 1, "b" = 2, etc.
 *
 * Example
 * alphabetPosition("The sunset sets at twelve o' clock.")
 * Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
 *
 */

/**
 * 字母在字母表中出现为位置取替换字母
 * @param text
 * @returns {string}
 */
function alphabetPosition(text) {
    // 将字符串中的字母全部转为小写
    // 使用正则表达式，去除字符串中的非字母字符
    // 最后将其转换为数组
    const textWithUpperCase = text.toLowerCase().replace(/[^a-z]/g, '').split('');

    const positionArr = textWithUpperCase.map(char => {
        // 获取小写字母的 ascii 码，小写字母的 ascii 范围是 97 - 123
        // ascii 码减去 96 就是小写字母在字母表出现的位置
        return char.charCodeAt(0) - 96;
    })

    return positionArr.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))