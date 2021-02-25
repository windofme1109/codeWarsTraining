/**
 *
 * Simple, given a string of words, return the length of the shortest word(s).
 *
 * String will never be empty and you do not need to account for different data types.
 *
 */

/**
 *
 * @param s
 * @returns {*}
 */
function findShort(s) {

    if (typeof s !== 'string' || s === '') {
        return ;
    }

    let strArr = s.split(' ');

    let strLengthArr = strArr.map(item => {
        return item.length;
    });

    strLengthArr.sort(function(a, b) {
        return a - b;
    })

    return strLengthArr[0];
}

const str = 'bitcoin take over the world maybe who knows perhaps';

console.log(findShort(str));