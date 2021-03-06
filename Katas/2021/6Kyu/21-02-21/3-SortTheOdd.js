/**
 *
 * Task
 * You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
 *
 * Examples
 * [7, 1]  =>  [1, 7]
 * [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
 * [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
 *
 */

function sortArray(array) {
    // const oddArr = [];

    // for (let i = 0; i < array.length; i++) {
    //     if (Math.abs(array[i] % 2) === 1) {
    //         oddArr.push(array[i]);
    //     }
    // }

    // 测试用例中，不仅有正奇数，还有负奇数，所以我们可以使用 filter() 方法进行优化
    // 过滤出数组的奇数，被 2 整除，余数为 0，所以是偶数，而 0 的布尔值为 false
    // 所以这样能直接过滤出奇数
    const oddArr = array.filter(item => item % 2);

    oddArr.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            array[i] = oddArr.shift();
        }
    }

    return array;
}


console.log(sortArray([5, 8, 6, 3, 4]))
console.log(sortArray([7, 1]))