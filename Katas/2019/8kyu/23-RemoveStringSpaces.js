/**
 *
 * Simple, remove the spaces from the string, then return the resultant string.
 *
 *
 */

// Test Case
// Test.describe("Example tests",_=>{
// Test.assertEquals(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
// Test.assertEquals(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd');
// Test.assertEquals(noSpace('8aaaaa dddd r     '), '8aaaaaddddr');
// });

// 第一版，使用正则表达式
/**
 * 去除字符串中所有的空格
 * @param x
 */

// function noSpace(x){
//     var regex = /\s/g ;
//     var ret = x.replace(regex, '') ;
//     return ret ;
// }

// 第二版，使用split()
function noSpace(x){
    var ret = x.split(' ') ;
    return ret.join('') ;
}
console.log(noSpace('8aaaaa dddd r     ')) ;
console.log(noSpace('8aaaaa dddd r     ') === '8aaaaaddddr') ;
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B') === '8j8mBliB8gimjB8B8jlB') ;
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd') === '88Bifk8hB8BB8BBBB888chl8BhBfd') ;