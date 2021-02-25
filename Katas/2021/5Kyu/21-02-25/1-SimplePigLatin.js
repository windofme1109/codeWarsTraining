/**
 *
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 *
 * Examples
 * pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * pigIt('Hello world !');     // elloHay orldway !
 *
 */

/**
 *
 * @param str
 * @returns {string}
 */
// function pigIt(str){
//     const strArr = str.split(' ');
//
//     return strArr.map(item => {
//         const firstLetter = item.slice(0, 1);
//         if (/\w/.test(firstLetter)) {
//             return item.slice(1) + firstLetter + 'ay';
//         }
//
//         return item;
//     }).join(' ');
// }

function pigIt(str) {
    return str.replace(/(\w)(\w*)(\s|$)/g,'$2$1ay$3');
}



console.log(pigIt('Pig latin is cool'));
console.log(pigIt('Hello world !'));