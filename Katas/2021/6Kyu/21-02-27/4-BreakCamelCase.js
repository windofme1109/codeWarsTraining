/**
 *
 * Complete the solution so that the function will break up camel casing, using a space between words.
 *
 * Example
 * solution("camelCasing")  ==  "camel Casing"
 *
 *
 */

// complete the function
function solution(string) {
    const upperCase = string.split(/[^A-Z]/).filter(item => item !== '');
    return string.split(/[A-Z]/).map((char, index) => {
        if (index === 0) {
            return char;
        } else {
            return upperCase[index - 1] + char;
        }
    }).join(' ');
}

/**
 *
 * @param string
 * @returns {*}
 */
// function solution(string) {
//     return string.replace(/([A-Z])/g, ' $1');
// }
console.log(solution('camelCasing'));
console.log(solution('camelCasingStrAaa'));
console.log(solution(''));

// const pattern = /([A-Z]{1}\w+)/;

// const str = 'camelCasing';
// const str2 = 'camelCasingStrAaa';
//
// console.log(str.match(pattern));
// console.log(str2.match(pattern));
// console.log(str2.split(/[A-Z]/));
// console.log(str2.split(/[^A-Z]/));
// console.log(str.split(/[A-Z]/));
// console.log(str.split(/[^A-Z]/));
