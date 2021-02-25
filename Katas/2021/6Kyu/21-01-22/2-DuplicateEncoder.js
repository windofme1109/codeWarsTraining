/**
 *
 * The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
 *
 * Examples
 * "din"      =>  "((("
 * "recede"   =>  "()()()"
 * "Success"  =>  ")())())"
 * "(( @"     =>  "))(("
 * Notes
 *
 * Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
 *
 *
 */

/**
 * 字符串转换，将每一个字符替换为 ( 或者 )，规则是：重复的字符使用 ) 替换，而唯一的字符使用 ( 替换
 * @param word
 * @returns {string}
 */
// function duplicateEncode(word){
//
//     const wordArr = word.toLowerCase().split('');
//
//     const obj = wordArr.reduce((acc, el) => {
//         if (acc[el]) {
//             acc[el] += 1;
//         } else {
//             acc[el] = 1;
//         }
//
//         return acc;
//     }, {});
//
//     let ret = wordArr.map(item => {
//         if (obj[item] > 1) {
//             return ')';
//         } else {
//             return '(';
//         }
//     });
//
//     return ret.join('');
// }


function duplicateEncode(word) {
    const wordArr = word.toLowerCase().split('');
    const ret = wordArr.map((item, index) => {

        if (wordArr.indexOf(item) === wordArr.lastIndexOf(item)) {
            // 正向查找和反向查找返回的索引是一样的，那么证明这个元素是唯一的
            return '(';
        } else {
            return ')'
        }
    })

    return ret.join('');
}

console.log(duplicateEncode('Success') === ')())())')