/**
 *
 * We need a function that can transform a string into a number. What ways of achieving this do you know?
 *
 * Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
 *
 * Examples
 * stringToNumber("1234") == 1234
 * stringToNumber("605" ) == 605
 * stringToNumber("1405") == 1405
 * stringToNumber("-7"  ) == -7
 */

// Test Case
// describe( "stringToNumber", function(){
//     it( "should work for the examples" , function(){
//         Test.assertEquals(stringToNumber("1234"),1234)
//         Test.assertEquals(stringToNumber("605"), 605)
//         Test.assertEquals(stringToNumber("1405"),1405)
//         Test.assertEquals(stringToNumber("-7"),  -7)
//     });
// });

// 版本1，直接使用Number()或者利用弱类型特性，
// 使用+或者*转换
/**
 * 将字符串转换为数组
 * @param str
 * @returns {null}
 */
// var stringToNumber = function(str){
//     // var num = Number(str) ;
//     // return str * 1 ;
//     return +str ;
// }

// 版本2，自己实现一个字符串转数字
// 转换整数，正数和负数
var stringToNumber = function(str){

    var numStrArr = str.split('') ;
    // 首先判断是正数还是负数
    // 为true表示是整数，为false表示是负数
    var isPositive = numStrArr.indexOf('-') === 0 ? false : true ;
    if (isPositive) {
        // 如果是正数
        // 现将字符串形式的数字转换为真实的数字
        var realPositiveNumArr = CharToNum(numStrArr) ;
        // 转换为整数
        var positiveInteger = toInteger(realPositiveNumArr) ;
        return positiveInteger ;
    } else {
        // 如果是负数，将numStrArr数组中的第一个元素，即负号（-）去掉，取得剩下的元素
        var absolutePartNum = numStrArr.slice(1) ;
        //
        var realNegativeNumArr = CharToNum(absolutePartNum) ;
        // 并将其转换为整数
        var negativeInteger = toInteger(realNegativeNumArr) ;
        return -negativeInteger ;
    }



}

function CharToNum(charArr) {
    var ret =  charArr.map(item => {
        // 字符串中的0-9的ascii码范围是：48-57
        // 直接将ascii码减去48，就是对应的数字
        var code = item.charCodeAt() ;
        return code - 48 ;
    })

    return ret ;
}

function toInteger(arr) {
    var ret = 0 ;
    for (let i = 0; i < arr.length; i++) {
        ret += arr[i] * Math.pow(10, (arr.length - 1) - i)
    }

    return ret ;
}

// console.log(toInteger([0, 0, 1, 2, 3, 4, 6])) ;
//
// var regex = /^(0+)([1-9]+)/g ;
// console.log('0000111234'.replace(regex, '$2')) ;
// console.log(regex.exec('0000111234')) ;
// console.log(regex.test('- 0000111234')) ;

console.log(stringToNumber('12344') === 12344) ;
console.log(stringToNumber('-7') === -7) ;