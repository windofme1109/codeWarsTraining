/**
 *
 * Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
 *
 * Rules for a smiling face:
 *
 * Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
 * A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
 * Every smiling face must have a smiling mouth that should be marked with either ) or D
 * No additional characters are allowed except for those mentioned.
 *
 * Valid smiley face examples: :) :D ;-D :~)
 * Invalid smiley faces: ;( :> :} :]
 *
 * Example
 * countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
 * countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
 * countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
 * Note
 * In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
 *
 */

//return the total number of smiling faces in the array
// function countSmileys(arr) {
//
//
//     const smiles = [':)', ':D', ';)', ';D', ':-)', ':-D', ':~)', ':~D', ';-)', ';-D',';~)', ';~D'];
//
//     let ret = arr.reduce((count, smile) => {
//         if (smiles.includes(smile)) {
//             count++;
//         }
//
//         return count;
//     }, 0);
//
//     return ret;
// }

/**
 * 正则表达式，验证组成笑脸的字符
 * @param arr
 * @returns {*}
 */
function countSmileys(arr) {

    // 一个笑脸，必须以 : 或者 ; 开头，以 ) 或者 D 结尾，所以使用了 ^ 和 $
    // 而中间的 - 或者 ~ ，可以出现或者不出现，因此就是 0 或者 1 次，因此使用 ?
    // [] 表示匹配来自字符集的任意单一字符
    const pattern = /^[:;][-~]?[)D]$/;

    let ret = arr.reduce((count, smile) => {
        if (pattern.test(smile)) {
            count++;
        }

        return count;
    }, 0);

    return ret;


}


console.log(countSmileys([':)', ';(', ';}', ':-D']));
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));
console.log(countSmileys([]));