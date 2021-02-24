/**
 *
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
 *
 * Examples
 * toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
 *
 * toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
 *
 *
 */

/**
 * 将以 - 或者是 _ 分隔的单词，以驼峰命名的方式，拼接成一个完整的字符串
 * @param str
 * @returns {string}
 */
function toCamelCase(str){
    if (str === '') {
        return '';
    }
    const strArr = str.split(/\-|_/g);

    const camelCase = strArr.map((item, index) => {
        if (index === 0) {
            // 第一个单词不用管
            return item;
        }
        return item.slice(0, 1).toUpperCase() + item.slice(1);
    }).join('');

    return camelCase;
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));