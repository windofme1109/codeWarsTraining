/**
 *
 * Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

 * each taken only once - coming from s1 or s2.
 * Examples:
 * a = "xyaabbbccccdefww"
 * b = "xxxxyyyyabklmopq"
 * longest(a, b) -> "abcdefklmopqwxy"
 *
 * a = "abcdefghijklmnopqrstuvwxyz"
 * longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
 *
 */


/**
 * 接收两个字符串，合并为一个，对于新的字符串去重，并排序
 */

/**
 *
 * @param s1
 * @param s2
 */

function longest(s1, s2) {
    // your code

    let s3 = s1 + s2;

    // 去重
    const noRepeatStr = noRepeat(s3);
    // 排序
    const sortedStr = sortStr(noRepeatStr);

    return sortedStr;
}


function sortStr(str) {
    let strArr = str.split('');
    // 调用sort()，原地排序
    // 不传入回调函数，按照ascii的顺序排序
    strArr.sort();

    return strArr.join('');
}

/**
 * 利用 Set 去重 - 1
 * @param str
 * @returns {string}
 */
// function noRepeat(str) {
//
//     // 利用 Set 进行去重
//     let set = new Set(str);
//     const ret = [];
//     set.forEach(item => {
//         ret.push(item);
//     })
//
//     return ret.join('');
// }

/**
 * 利用 Set 去重 - 1
 * @param str
 * @returns {string}
 */
// function noRepeat(str) {
//     const set = new Set(str);
//     return [...set].join('');
// }

function noRepeat(str) {
    const strArr = str.split('');
    const ret = strArr.filter((item, index) => {
        // indexOf() 方法查找的是元素在数组中第一个出现的位置，那么对于重复的元素
        // 除了第一个元素，后面重复的元素的索引和 indexOf() 方法的返回值肯定不一致
        // 所以我们只需判断当前元素的索引是否等于 indexOf(item) 的返回值，即可判断这个元素是不是重复的
        // 结合filter() 方法，就能实现数组去重
        return strArr.indexOf(item) === index;
    })

    return ret.join('');
}

let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";
console.log(longest(a, b));