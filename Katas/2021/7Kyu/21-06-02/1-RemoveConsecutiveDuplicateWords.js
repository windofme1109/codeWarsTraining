/**
 *
 * Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:
 *
 * "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
 *
 * --> "alpha beta gamma delta alpha beta gamma delta"
 *
 */

/**
 * 去除字符串中连续出现的重新的单词
 * @param s
 * @returns {string}
 */
// const removeConsecutiveDuplicates = s => {
//     return s.split(' ').reduce((acc, cur) => {
//         if (acc.length === 0 || acc[acc.length - 1] !== cur) {
//             acc.push(cur);
//         }
//
//         return acc;
//     }, []).join(' ');
// }
// let ret = removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta');
// let right = 'alpha beta gamma delta alpha beta gamma delta'
// console.log(ret === right);

// function removeConsecutiveDuplicates() {
//     const pattern = //;
// }