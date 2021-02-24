/**
 *
 *
 * Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

 * Examples input/output:
 *
 * XO("ooxx") => true
 * XO("xooxx") => false
 * XO("ooxXm") => true
 * XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
 * XO("zzoo") => false
 *
 *
 */

/**
 *
 * 查找字符串中的 x 和 o 的数量
 * 如果相等，就返回 true，不相等，就返回 false
 *
 */

function XO(str) {
    //code here

    if (typeof str !== 'string') {
        return;
    }

    let xCount = 0;
    let oCount = 0;

    str.toLowerCase().split('').forEach(item => {
        if (item === 'x') {
            xCount++;
        }

        if (item === 'o') {
            oCount++;
        }
    })

    return xCount === oCount;

}

console.log(XO('XOXOoxooxx'))