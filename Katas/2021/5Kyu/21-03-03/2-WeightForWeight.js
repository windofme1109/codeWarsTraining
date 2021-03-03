/**
 *
 * I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.
 *
 * For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
 *
 * Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
 *
 * Example:
 * "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:
 *
 * "100 180 90 56 65 74 68 86 99"
 * When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:
 *
 * 180 is before 90 since, having the same "weight" (9), it comes before as a string.
 *
 * All numbers in the list are positive numbers and the list can be empty.
 *
 * Notes
 * it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
 *
 */

/**
 * 根据权重排序
 * 如果权重相同，则数字是按照其字符串形式进行排序，即比较其 unicode
 * @param strng
 * @returns {string}
 */
// function orderWeight(strng) {
//
//     if (strng === '') {
//         return '';
//     }
//
//
//     let weightArr = strng.trim().split(/\s+/).map(item => {
//         const weight = item.split('').reduce((acc, ele) => acc + ele * 1, 0);
//         return {
//             weight,
//             weightNum: item * 1
//         }
//
//     });
//     weightArr.sort((a, b) => {
//         if (a.weight > b.weight) {
//             return 1;
//         } else if (a.weight < b.weight) {
//             return -1;
//         } else {
//             // 权重一样，根据体重的字母顺序进行比较
//             // 也就是将体重转换为字符串，直接比较字符串，即比较的是 unicode
//             if (String(a.weightNum) < String(b.weightNum)) {
//                 return -1;
//             } else if (String(a.weightNum) > String(b.weightNum)) {
//                 return 1;
//             } else {
//                 return 0;
//             }
//         }
//
//     });
//     return weightArr.map(item => {
//         return item.weightNum;
//     }).join(' ');
// }

/**
 * 优化：使用localeCompare() 实现对字符串的比较
 * @param strng
 * @returns {string|string[]}
 */
function orderWeight(strng) {

    if (strng === '') {
        return '';
    }
    const sum = function (str) {
        return str.split('').reduce((acc, ele) => acc + ele * 1, 0);
    }

    let ret = strng.trim().split(/\s+/).sort((a, b) => {
        let sumA = sum(a);
        let sumB = sum(b);

        if (sumA === sumB) {
            // a.localeCompare(b) 以当地语言的习惯来比较字符串 a 和 b 的顺序
            // 如果 a 在 b 的前面，返回 -1
            // 如果 a 在 b 的后面，返回 1
            // 如果 a 和 顺序相同，返回 0
            return a.localeCompare(b);
        }

        return sumA - sumB;
    })

    return ret;
}



// 100 180 90 56 65 74 68 86 99
// console.log(orderWeight('56 65 74 100 99 68 86 180 90'));
let s = '12 113 32 43 80 153 118 48 58 68 420135 56502 99 230834 271281 56318 58380 276384 158945 179289 468927';
console.log(orderWeight('468927 32 58380 43 230834 80 56502 99 179289 118 158945 12 56318 48 276384 68 271281 153 420135 113 58') === s);
console.log(orderWeight('84842 172 421987 125 468516 84 286927 67 10373 187 298572 50 91339 183 465304 60 149782 192 254645 52 66'));

const a = [1, 5, 6, 7, 10];

