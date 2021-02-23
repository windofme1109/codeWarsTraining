/**
 *
 * This time no story, no theory. The examples below show you how to write function accum:
 *
 * Examples:
 *
 * accum("abcd") -> "A-Bb-Ccc-Dddd"
 * accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 * accum("cwAt") -> "C-Ww-Aaa-Tttt"
 * The parameter of accum is a string which includes only letters from a..z and A..Z.
 *
 */

// Test Case
// Test.describe("accum",function() {
// Test.it("Basic tests",function() {
// 	Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
// 	Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
// 	Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
// 	Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
// 	Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
// })})

/**
 *
 * @param s
 */
function accum(s) {
    // your code

    // 第一步，将字符串转换为数组
    var strArr = s.split('') ;

    var retArr = strArr.map(function(item, index) {
        // 'abcd'处理为'A-Bb-Ccc-Dddd'
        // 将字符重复n次，并将首个字符大写
        // 我的处理方式就是：使用toUpperCase()将字母大写，然后使用toLowerCase()将字母小写
        // 因为小写字母数量实际上和索引一致，那么在使用ES6新增的repeat()方法，重复索引次数
        // 最后拼接
        return item.toUpperCase() + item.toLowerCase().repeat(index) ;
    }) ;

    // 使用-将数组项连接，生成最终的字符串
    return retArr.join('-') ;
}

console.log(accum('abcd')) ;