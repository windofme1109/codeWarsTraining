/**
 *
 *
 * #Find the missing letter
 *
 * Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
 *
 * You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
 * The array will always contain letters in only one case.
 *
 * Example:
 *
 * ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
 *
 * ["a","b","c","d","f"] -> "e"
 * ["O","Q","R","S"] -> "P"
 *
 */

function findMissingLetter(array) {


    for (let i = 1; i < array.length; i++) {
        // 获取字符的 ascii
        let preCharCode = array[i - 1].charCodeAt(0);
        let curCharCode = array[i].charCodeAt(0);
        // 连续的字母的 ascii 相差一定是 1，如果不是 1，证明这两个字母之间缺失了其他字母
        if (Math.abs(preCharCode - curCharCode) !== 1) {
            // 将 ascii 转换为 字母
            return String.fromCharCode(preCharCode + 1);
        }
    }

    return '';
}

console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(["O","Q","R","S"]));
