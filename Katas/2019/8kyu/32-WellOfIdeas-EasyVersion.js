/**
 *
 * For every good kata idea there seem to be quite a few bad ones!
 *
 * In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
 * If there are one or two good ideas, return 'Publish!',
 * if there are more than 2 return 'I smell a series!'.
 * If there are no good ideas, as is often the case, return 'Fail!'.
 */

// Test Case
// Test.describe("Example tests",_=>{
// Test.assertEquals(well(['bad', 'bad', 'bad']), 'Fail!');
// Test.assertEquals(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
// Test.assertEquals(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
// });

// 版本1，使用for循环，得到good的数量
/**
 * 检测一个数组中good的数量
 * @param x
 */
// function well(x) {
//     var count = 0 ;
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] === 'good') {
//             count++ ;
//         }
//     }
//
//     if (count === 1 || count === 2) {
//         return 'Publish!' ;
//     } else if (count > 2) {
//         return 'I smell a series!' ;
//     } else {
//         return 'Fail!' ;
//     }
// }

// 版本1，使用filter()得到只有good的数组，然后获取数组长度
function well(x) {
    var count = x.filter(item => item === 'good').length ;

    if (count === 1 || count === 2) {
        return 'Publish!' ;
    } else if (count > 2) {
        return 'I smell a series!' ;
    } else {
        return 'Fail!' ;
    }
}

console.log(well(['bad', 'bad', 'bad'])) ;
console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])) ;
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])) ;