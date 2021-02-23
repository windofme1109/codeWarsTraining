/**
 * Complete the function that calculates the area of the red square,
 * when the length of the circular arc A is given as the input.
 * Return the result rounded to two decimals.
 *
 */


// Test Case
// Test.describe("squareArea(2)", function() {
//   Test.assertEquals(squareArea(2), 1.62);
// });
//
// Test.describe("squareArea(0)", function() {
//   Test.assertEquals(squareArea(0), 0);
// });
//
// Test.describe("squareArea(14.05)", function() {
//   Test.assertEquals(squareArea(14.05), 80);
// });

function squareArea(A) {
    // A是四分之一圆弧长，这个圆的半径是正方形的边长
    // 根据弧长A，计算出半径，也就是正方形的边长
    let r = 2 * A / Math.PI ;

    // 计算正方形面积
    let area = r * r ;
    // 题目中要求，保留两位小数
    //  调用数字的toFixed() 方法，这个方法会按照指定的小数位返回数值的字符串表示
    // 这里给 toFixed() 方法传入了数值 2，则最终结果就会保留两位小数，如果是整数，就用0来凑
    // 如果数字原本的小数位数要比保留的多，则最终对原数字执行四舍五入，得到指定位数的数字
    return Number(area.toFixed(2)) ;

}

console.log(squareArea(2)) ;
console.log(squareArea(14.05)) ;
console.log(squareArea(0)) ;