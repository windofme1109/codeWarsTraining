/**
 * Write a function to split a string and convert it into an array of words. For example:
 * "Robin Singh" ==> ["Robin", "Singh"]
 * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
 *
 */
// Test Case
// Test.assertDeepEquals(stringToArray("Robin Singh"), ["Robin", "Singh"]);
// Test.assertDeepEquals(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);

function stringToArray(string){
    // 直接使用split()函数，对字符串进行切分
    return string.split(' ') ;

}

console.log(stringToArray('Robin Singh')) ;