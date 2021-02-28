/**
 *
 * The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
 *
 * What if the string is empty? Then the result should be empty object literal, {}.
 *
 */

/**
 * 统计每个字母出现的次数
 * @param string
 * @returns {*}
 */
function count (string) {
    // The function code should be here
    return string.split('').reduce((acc, ele) => {
        if (acc[ele]) {
            acc[ele] += 1;
        } else {
            acc[ele] = 1;
        }

        return acc;
    }, {});
}