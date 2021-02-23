/**
 * You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

 * The returned value must be a string, and have "***" between each of its letters.

 * You should not remove or add elements from/to the array.
 */

// Test case
// Test.describe("Basic tests",_=>{
// Test.assertEquals(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
// Test.assertEquals(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');
// });

function twoSort(s) {
    // 数组s中都是单词，使用sort()函数按照字母顺序，进行排序
    // sort()不传入任何比较函数的情况下，按照字符串的ascii的顺序排序
    s.sort() ;

    // 取出第一个单词
    var first = s[0] ;

    // 使用扩展运算符，将字符串变为数组，然后使用***连接
    return [...first].join('***') ;
}

console.log(twoSort(["bitcoin", "Take", "over", "the", "world", "Maybe", "who", "knows", "perhaps"]))

