/**
 *
 * Write function makeUpperCase.
 *
 */

// describe("Basic Tests", function(){
//   it("should pass the basic tests", function(){
//     Test.assertEquals(makeUpperCase("hello"), "HELLO");
//   });
// });

// 版本1，直接使用toUpperCase()
/**
 * 将字符串中的小写字母变成大写字母
 * @param str
 */
// function makeUpperCase(str) {
//     // Code here
//     return str.toUpperCase() ;
// }

// 版本2，自行转换
function makeUpperCase(str) {
    var strArr = str.split('') ;
    var retArr = strArr.map(item => {
        var charCode = item.charCodeAt() ;
        if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode(charCode -32) ;
        } else {
            return item ;
        }
    }) ;

    return retArr.join('') ;
}

console.log(makeUpperCase('hello')) ;
console.log(makeUpperCase('apple')) ;
