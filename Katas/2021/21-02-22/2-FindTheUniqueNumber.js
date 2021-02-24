/**
 *
 * There is an array with some numbers. All numbers are equal except for one. Try to find it!
 *
 * findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
 * findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
 * It’s guaranteed that array contains at least 3 numbers.
 *
 * The tests contain some very huge arrays, so think about performance.
 *
 */

/**
 * 找出唯一的不一样的数字
 * 方式 1 ：遍历整个数组，找到哪个不一样的数字
 * @param arr
 * @returns {number}
 */
// function findUniq(arr) {
//     let count = arr.reduce((acc, ele) => {
//         if (acc[ele]) {
//             acc[ele]++;
//         } else {
//             acc[ele] = 1;
//         }
//
//         return acc;
//     }, {});
//
//     for (let key of Object.keys(count)) {
//         if (count[key] === 1) {
//             return key * 1;
//         }
//     }
// }

/**
 * 方法 2 ：先对数组进行排序，则不一样的数字一定在第一位或者最后一位
 * 但是原生的 sort() 方法是对原数组进行操作，因此对性能有一定的影响
 * @param arr
 * @returns {*}
 */
// function findUniq(arr) {
//     arr.sort((a, b) => {
//         return a - b;
//     });
//     return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
// }

/**
 * 方式 3：使用 find() 方法
 * 因为只有一个不一样的数字，所以使用 indexOf() 和 lastIndexOf() 找到的索引必然是相同的
 * @param arr
 * @returns {*|number|bigint}
 */
function findUniq(arr) {
    return arr.find(item => {
        return arr.indexOf(item) === arr.lastIndexOf(item);
    });
}

console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));