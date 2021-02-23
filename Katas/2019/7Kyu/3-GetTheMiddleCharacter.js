/**
 *
 * You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

 * #Examples:

 * Kata.getMiddle("test") should return "es"

 * Kata.getMiddle("testing") should return "t"

 * Kata.getMiddle("middle") should return "dd"

 * Kata.getMiddle("A") should return "A"
 * #Input
 *
 * A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
 *
 * #Output
 *
 * The middle character(s) of the word represented as a string.
 */

// Test Case
// Test.describe("GetMiddle", function() {
//   Test.it("Tests", function() {
//     Test.assertEquals(getMiddle("test"),"es");
//     Test.assertEquals(getMiddle("testing"),"t");
//     Test.assertEquals(getMiddle("middle"),"dd");
//     Test.assertEquals(getMiddle("A"),"A");
//   });
// });

// 版本1，
// function getMiddle(s) {
//     var strLength = s.length ;
//     var loc = Math.floor(strLength / 2) ;
//     if (strLength % 2 === 0) {
//         // 字符串长度是偶数
//         // 获取中间两个字符
//         return s.slice(loc - 1, loc + 1) ;
//     } else {
//         // 字符串长度是奇数
//         // 获取中间的一个字符
//         return s.slice(loc, loc + 1) ;
//     }
// }

// 版本2，精简版
function getMiddle(s) {
    var strLength = s.length ;
    var loc = Math.floor(strLength / 2) ;

    return strLength % 2 === 0 ? s.slice(loc - 1, loc + 1) : s.slice(loc, loc + 1) ;
}
console.log(getMiddle("test"))
console.log(getMiddle("testing"))
console.log(getMiddle("middle"))
console.log(getMiddle("a"))
