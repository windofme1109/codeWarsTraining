/**
 *
 * The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly.
 * Similarly, a11y is an abbreviation of accessibility.
 *
 * Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:
 *
 * A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
 * The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
 * Example
 * abbreviate("elephant-rides are really fun!")
 * //          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
 * // words (^):   "elephant" "rides" "are" "really" "fun"
 * //                123456     123     1     1234     1
 * // ignore short words:               X              X
 *
 * // abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
 * // all non-word characters (*) remain in place
 * //                     "-"      " "    " "     " "     "!"
 * === "e6t-r3s are r4y fun!"
 *
 */

// function abbreviate(string) {
//     // 以空格分割出单词
//     const words = string.split(' ').map(item => {
//         return item.split(/([a-zA-Z]+)/).map(w => {
//             if (/[a-zA-Z]+/.test(w) && w.length >= 4) {
//                 return replaceChar(w);
//             }
//
//             return w;
//         }).join('');
//
//     }).join(' ');
//
//     return words;
// }

function replaceChar(word) {
    return word[0] + word.slice(1, word.length - 1).length + word[word.length - 1];
}

// console.log(abbreviate('elephant-rides are really fun!'));
// console.log(abbreviate('elephant-ride'));
// console.log(replaceChar('elephant'));


function abbreviate(string) {

    // 使用正则，匹配出长度大于等于 4 的单词，不匹配其他字符
    // 利用 replace() 的第二个参数可以接收函数的特性，对匹配的结果依次进行替换操作
    return string.replace(/[a-zA-Z]{4,}/g, (match) => {
        return match[0] + match.slice(1, match.length - 1).length + match[match.length - 1];
    })

}

console.log(abbreviate('elephant-rides are really fun!'));
console.log(abbreviate('elephant-ride'));
console.log(replaceChar('elephant'));
