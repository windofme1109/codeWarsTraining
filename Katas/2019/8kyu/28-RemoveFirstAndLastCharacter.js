/**
 * It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
 * You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
 *
 */

// Test.describe("Tests", function(){
//
// Test.assertEquals(removeChar('eloquent'), 'loquen');
// Test.assertEquals(removeChar('country'), 'ountr');
// Test.assertEquals(removeChar('person'), 'erso');
// Test.assertEquals(removeChar('place'), 'lac');
//
// });

/**
 * 去除字符串首尾的字符
 * @param str
 */
function removeChar(str) {
    // 直接使用slice()
    return str.slice(1, str.length - 1) ;

};

console.log(removeChar('eloquent')) ;
console.log(removeChar('country')) ;