/**
 *
 * Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
 *
 * #Example 1: a1 = ["arp", "live", "strong"]
 *
 * a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
 *
 *  returns ["arp", "live", "strong"]
 *
 * #Example 2: a1 = ["tarp", "mice", "bull"]
 *
 * a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
 *
 * returns []
 *
 * Notes:
 * Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
 *
 * In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
 *
 * Beware: r must be without duplicates.
 * Don't mutate the inputs.
 *
 */

/**
 * array2 中的元素是否包含 array1 中的元素
 * @param array1
 * @param array2
 * @returns {[]}
 */
// function inArray(array1, array2){
//     const ret = [];
//
//     array1.forEach(word => {
//         const sub = array2.find(item => item.indexOf(word) !== -1);
//         if (sub) {
//             ret.push(word);
//         }
//     });
//
//     // 按照字母顺序进行排序
//     ret.sort();
//     return ret;
// }

/**
 *
 * @param array1
 * @param array2
 * @returns {this}
 */
function inArray(array1, array2) {
    // 将 array2 拼接成一个字符串
    const str = array2.join(' ');
    // 使用 filter() 结合字符串的 include() 方法，就能过滤出符合条件的 array1 中的元素
    let ret = array1.filter(word => str.includes(word));
    ret.sort();
    return ret;
}

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));