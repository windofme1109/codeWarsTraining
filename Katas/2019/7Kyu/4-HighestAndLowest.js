/**
 * In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
 *
 * Example:
 *
 * highAndLow("1 2 3 4 5");  // return "5 1"
 * highAndLow("1 2 -3 4 5"); // return "5 -3"
 * highAndLow("1 9 3 4 -5"); // return "9 -5"
 * Notes:
 *
 * All numbers are valid Int32, no need to validate them.
 * There will always be at least one number in the input string.
 * Output string must be two numbers separated by a single space, and highest number is first.
 */

// Test Case
// Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");

// 版本1，循环数组，从中找出最大值和最小值
// function highAndLow(numbers) {
//     var numbersArr = numbers.split(' ') ;
//
//     // numbersArr数组中的数字元素都是字符串，所以需要转换为数组
//     var realNum = numbersArr.map((item) => {
//         return item * 1 ;
//     }) ;
//
//     // 将最大值和最小值设置为数组的第一个元素，这样保证最大值和最小值一定是数组中的
//     var max = realNum[0] ;
//     var min = realNum[0] ;
//     for (let i = 0; i < realNum.length; i++) {
//         var num = realNum[i] ;
//         if (num >= max) {
//             // 寻找最大值
//             max = num ;
//         }
//
//         if (num <= min) {
//             // 寻找最小值
//             min = num ;
//         }
//     }
//
//     return [max, min].join(' ') ;
// }


// 版本2， 使用max()函数和min()函数
// function highAndLow(numbers) {
//     var numbersArr = numbers.split(' ') ;
//
//     // numbersArr数组中的数字元素都是字符串，所以需要转换为数组
//     var realNum = numbersArr.map((item) => {
//         return item * 1 ;
//     }) ;
//
//     // 使用扩展运算符，将数组展开
//     // var max = Math.max(...realNum) ;
//     // var min = Math.min(...realNum) ;
//
//     // 使用apply()函数，将max()改造，使之可以接收数组
//     var max = Math.max.apply(null, realNum) ;
//     var min = Math.min.apply(null, realNum) ;
//
//     return [max, min].join(' ') ;
// }

// 版本3，使用sort()函数对数组进行升序排序
function highAndLow(numbers) {
    var numbersArr = numbers.split(' ') ;

    // numbersArr数组中的数字元素都是字符串，所以需要转换为数组
    var realNum = numbersArr.map((item) => {
        return item * 1 ;
    }) ;

    // 使用sort()对数组进行排序，排序规则是升序
    realNum.sort(function (a, b) {
        return a - b ;
    }) ;

    var max = realNum[realNum.length - 1] ;
    var min = realNum[0] ;
    return [max, min].join(' ') ;

}

console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6')) ;