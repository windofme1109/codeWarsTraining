/**
 *
 * This is a spin off of my first kata.
 * You are given a list of character sequences as a comma separated string.
 * Write a function which returns another string containing all the character sequences except the first and the last ones.
 * If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a null value.
 */

// Test Case
// Test.describe("Tests", function(){
//
// Test.assertEquals(array(''), null);
// Test.assertEquals(array('1'), null);
// Test.assertEquals(array('1, 3'), null);
// Test.assertEquals(array('1,2,3'), '2');
//
// });

// 给定的字符串是以逗号分隔的，然后要求去除字符串首位的字符
// 空字符串。或者只有两个字符的字符串，返回空字符串
function array(arr){
    var strArr = arr.split(',') ;
    if (strArr.length <= 2) {
        return null ;
    }

    return strArr.slice(1, strArr.length - 1).join(' ') ;


}

console.log(array('')) ;
console.log(array('1')) ;
console.log(array('1,2')) ;
console.log(array('1,2,3')) ;
console.log(array('1,2,3,4')) ;