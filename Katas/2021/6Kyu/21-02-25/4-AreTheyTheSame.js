/**
 *
 *
 * Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

 * Examples
 * Valid arrays
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
 * comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:
 *
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
 * Invalid arrays
 * If, for example, we change the first number to something else, comp may not return true anymore:
 *
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
 * comp(a,b) returns false because in b 132 is not the square of any number of a.
 *
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
 * comp(a,b) returns false because in b 36100 is not the square of any number of a
 *
 */

/**
 * 判断 array2 中的元素是否是 array1 中的元素的平方
 * @param array1
 * @param array2
 * @returns {boolean}
 */
// function comp(array1, array2){
//
//     if (!array1 || !array2) {
//         // 只要 array1 和 array2 中，有一个不是数组形式，就返回 false
//         return false;
//     }
//     const squareArr1 = array1.map(item => item ** 2);
//
//     // 排序
//     squareArr1.sort((a, b) => a - b);
//     array2.sort((a, b) => a - b);
//
//     for (let i = 0; i < squareArr1.length; i++) {
//         if (squareArr1[i] !== array2[i]) {
//             return false;
//         }
//     }
//
//     return true;
//
// }

/**
 * 优化方案 1：使用 every() 方法替代 for 循环
 * @param array1
 * @param array2
 * @returns {boolean}
 */
// function comp(array1, array2) {
//     if (!array1 || !array2) {
//         return false;
//     }
//     const squareArr1 = array1.map(item => item ** 2);
//     // 排序
//     squareArr1.sort((a, b) => a - b);
//     array2.sort((a, b) => a - b);
//     // 使用 every() 对 squareArr1 与 array2 进行一一比对，如果全部相同，则返回 true，否则返回 false
//     return squareArr1.every((item, index) => item === array2[index]);
// }

/**
 * 优化 3：使用 join() 将数字连接成一个字符串，然后比较两个字符串
 * @param array1
 * @param array2
 * @returns {boolean}
 */
function comp(array1, array2) {
    if (!array1 || !array2) {
        return false;
    }
    const squareArr1 = array1.map(item => item ** 2);
    // 排序
    squareArr1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
    // 使用 join() 将数字连接成一个字符串，然后比较两个字符串
    return squareArr1.join('') ===  array2.join('');
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))
console.log(comp([], null));