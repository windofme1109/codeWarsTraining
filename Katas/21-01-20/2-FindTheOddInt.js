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
// function findOdd(A) {
//     // 1. 数组去重
//     const arrWithoutRepeatElement = [...(new Set(A))];
//
//     // 2. 遍历去重后的数组
//     let counts = arrWithoutRepeatElement.map((item) => {
//         let count = 0;
//         // 3. 获得元素的重复次数
//         A.forEach(e => {
//             if (e === item) {
//                 count += 1;
//             }
//         });
//
//         return count;
//     });
//
//     // 4. 找到出现奇数次数的元素的索引
//     let targetIndex = counts.findIndex(item => item % 2 === 1);
//
//     return arrWithoutRepeatElement[targetIndex];
// }

/**
 * 方法 2，使用 find() 和 filter() 实现
 * @param A
 * @returns {any}
 */
// function findOdd(A) {
//     // 1. 数组去重
//     const arrWithoutRepeatElement = [...(new Set(A))];
//     // 对数组进行遍历
//     return arrWithoutRepeatElement.find((item, index) => {
//         // 根据去重后的元素对原始数组内容进行过滤
//         // 得到过滤后的数组，然后计算其长度是不是奇数
//         return A.filter((el) => el === item).length % 2 === 1
//     })
// }

/**
 * 方法 3，使用 forEach() 和对象 实现
 * @param A
 * @returns {number}
 */
// function findOdd(A) {
//     const obj = {};
//     A.forEach(item => {
//         obj[item] ? (obj[item] += 1) : (obj[item] = 1)
//     });
//     let ret = 0;
//     for (let key in obj) {
//         if (obj[key] % 2 === 1) {
//             ret = key;
//             break
//         }
//     }
//
//     return ret * 1;
// }

function findOdd(A) {
    const count = A.reduce((acc, el) => {
        if (acc[el]) {
            acc[el] += 1;
        } else {
            acc[el] = 1;
        }

        return acc;
    }, {});
    let ret = 0;
    for (let key in count) {
        if (count[key] % 2 === 1) {
            ret = key;
            break
        }
    }
    return ret * 1;
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))
console.log(findOdd([10]))