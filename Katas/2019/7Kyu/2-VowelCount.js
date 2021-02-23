/**
 *
 * Return the number (count) of vowels in the given string.
 *
 * We will consider a, e, i, o, and u as vowels for this Kata.
 *
 * The input string will only consist of lower case letters and/or spaces.
 */

// Test Case
// describe("Case 1", function(){
//     it ("should be defined", function(){
//         Test.assertEquals(getCount("abracadabra"), 5)
//     });
// });

// 得到字符串中元音的数量
// a e i o u

/**
 *
 * @param str
 * @returns {number}
 */
function getCount(str) {
    var vowelsCount = 0;
    // 现将字符串转换为数组
    var strArr = str.split('') ;
    var vowels = ['a', 'e', 'i', 'o', 'u'] ;

    var retArr = strArr.filter((item) => {
        // 遍历数组中的每一项
        // 判断是不是元音，也就数组项是不是包含在vowels这个数组中
        // 使用ES6新增的includes()方法，数组包含某个元素，就返回true，否则返回false
        return vowels.includes(item) ;
    }) ;

    // retArr数组 的长度就是字符串中元音的数量
    vowelsCount = retArr.length ;


    return vowelsCount;
}

console.log(getCount('abracadabra')) ;
console.log(getCount('apple')) ;