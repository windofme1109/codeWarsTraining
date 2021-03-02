/**
 *
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 *
 * moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 *
 */

/**
 * 保持顺序的情况下将数组中的 0 挪到数组的末尾
 * @param arr
 * @returns {unknown[]}
 */
var moveZeros = function (arr) {
    let arrWithZeros = arr.filter(item => item !== 0);
    let zeroArr = arr.filter(item => item === 0);
    return arrWithZeros.concat(zeroArr);
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));