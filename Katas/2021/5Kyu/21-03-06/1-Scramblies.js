/**
 *
 * Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

 * Notes:
 *
 * Only lower case letters will be used (a-z). No punctuation or digits will be included.
 * Performance needs to be considered
 * Input strings s1 and s2 are null terminated.
 * Examples
 * scramble('rkqodlw', 'world') ==> True
 * scramble('cedewaraaossoqqyt', 'codewars') ==> True
 * scramble('katas', 'steak') ==> False
 *
 */

/**
 * str1 中的字母能否组成 str2
 * 原理就是统计 str2 与 str1 中字母的数量，然后进行比较
 * 即 str2 中的字母必须在 str1 中，同时 str1 中对应的字母的数量必须大于 str1
 * @param str1
 * @param str2
 * @returns {boolean}
 */
function scramble(str1, str2) {
    const strCount1 = charCount(str1);
    const strCount2 = charCount(str2);

    for (let key of Object.keys(strCount2)) {
        if (!strCount1[key] || strCount1[key] < strCount2[key]) {
            return false;
        }
    }

    return true;


}

function charCount(str) {
    return str.split('').reduce((acc, ele) => {
        if (acc[ele]) {
            acc[ele] += 1;
        } else {
            acc[ele] = 1;
        }
        return acc;
    }, {});
}


console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('katas', 'steak'));
console.log(scramble('rkqodlw', 'world'));

// console.log(charCount('cedewaraaossoqqyt'));