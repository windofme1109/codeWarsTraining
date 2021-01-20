/**
 *
 * Given an array of integers, find the one that appears an odd number of times.
 *
 * There will always be only one integer that appears an odd number of times.
 *
 */

/**
 * 从一个数组中找出出现奇数次数的元素
 * @param A
 * @returns {number}
 */
function findOdd(A) {
    // 1. 数组去重
    const arrWithoutRepeatElement = [...(new Set(A))];

    // 2. 遍历去重后的数组
    let counts = arrWithoutRepeatElement.map((item) => {
        let count = 0;
        // 3. 获得元素的重复次数
        A.forEach(e => {
            if (e === item) {
                count += 1;
            }
        });

        return count;
    });

    // 4. 找到出现奇数次数的元素的索引
    let targetIndex = counts.findIndex(item => item % 2 === 1);

    return arrWithoutRepeatElement[targetIndex];
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))
console.log(findOdd([10]))