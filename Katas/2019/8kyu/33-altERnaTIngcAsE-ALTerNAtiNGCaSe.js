/**
 * altERnaTIng cAsE <=> ALTerNAtiNG CaSe
 * Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details)
 * such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.
 * For example:
 * "hello world".toAlternatingCase() === "HELLO WORLD"
 "HELLO WORLD".toAlternatingCase() === "hello world"
 "hello WORLD".toAlternatingCase() === "HELLO world"
 "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
 "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
 "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
 "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
 */

// Test Case
// describe("String.prototype.toAlternatingCase", _ => {
//   it("should work for fixed tests (provided in the description)", _ => {
//     Test.assertEquals("hello world".toAlternatingCase(), "HELLO WORLD");
//     Test.assertEquals("HELLO WORLD".toAlternatingCase(), "hello world");
//     Test.assertEquals("hello WORLD".toAlternatingCase(), "HELLO world");
//     Test.assertEquals("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
//     Test.assertEquals("12345".toAlternatingCase(), "12345");
//     Test.assertEquals("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
//     Test.assertEquals("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
//     Test.assertEquals("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");
//   });
// });

// 版本1
/**
 * 将字符串中的大写字母转换成小写，小写字母变成大写，其余字符不变
 */
// String.prototype.toAlternatingCase = function () {
//     // 小写字母的ascii范围是：97-122
//     // 大写字母的ascii范围是：65-90
//     // 同一个字母的大小写的ascii之间相差32
//     // 首先，将字符串钻换为数组
//     var stringArr = this.split('') ;
//
//     var retArr = stringArr.map(item => {
//         // 获取每个字符的ascii码
//         var asciiCode = item.charCodeAt() ;
//         // 判断是大写字母还是小写字母
//         if (asciiCode >= 97 && asciiCode <= 122) {
//             // 小写字母
//             // 小写字母的ascii码减32，就是大写字母
//             return String.fromCharCode(asciiCode - 32) ;
//         } else if (asciiCode >= 65 && asciiCode <= 90) {
//             // 大写字母
//             // 大写字母的ascii码加32，就是小写字母
//             return String.fromCharCode(asciiCode + 32) ;
//         } else {
//             // 其他字符
//             return item ;
//         }
//     }) ;
//
//     // retArr是完成大小写转换后的数组
//     // 将数组变成字符串
//     var ret = retArr.join('') ;
//
//     return ret ;
//
// }

// 版本2
String.prototype.toAlternatingCase = function ()  {
    var ret = '' ;
    // 直接对字符串进行循环
    for (let i = 0; i < this.length; i++) {
        // 获取每个字符的ascii码
        var code = this[i].charCodeAt() ;
        if (code >= 97 && code <= 122) {
            ret = ret + this[i].toUpperCase() ;
        } else if (code >= 65 && code <= 90) {
            ret = ret + this[i].toLowerCase() ;
        } else {
            ret = ret + this[i] ;
        }
    }

    return ret ;
}

console.log('ab13DE'.toAlternatingCase()) ;
console.log("String.prototype.toAlternatingCase".toAlternatingCase() === 'sTRING.PROTOTYPE.TOaLTERNATINGcASE') ;
