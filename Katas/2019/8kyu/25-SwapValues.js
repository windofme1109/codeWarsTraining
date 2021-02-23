/**
 *
 * I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.
 *
 * Can you figure out what's wrong here?
 */


// Test Case
// var arr = [1,2] ;
// swapValues(arr);
// Test.assertEquals(arr[0], 2, "Failed swapping numbers") ;
// Test.assertEquals(arr[1], 1, "Failed swapping numbers") ;

// 原版函数代码
// 作用是接收一个只有两个元素的数组，然后交换数组中的值（原地操作），但是，原版函数不能实现这个功能
// function swapValues() {
//     // 问题1 接收的是一个数组，而arguments是一个类数组对象，接收的数组实际上是属性值
//     // 下面的方法这样只能把arguments转换为数组，而接收的数组就变成了数组的元素
//     var args = Array.prototype.slice.call(arguments);
//     var temp = args[0];
//     args[0] = args[1];
//     args[1] = temp;
//
// }

// 改进版1
// 借助中间变量进行交换
// function swapValues(arr) {
//     var temp = arr[0] ;
//     arr[0] = arr[1] ;
//     arr[1] =  temp ;
//
// }
// 改进版2
// 使用结构赋值
function swapValues(arr) {
    [arr[0], arr[1]] = [arr[1], arr[0]] ;

}
var arr1 = [1, 2] ;

swapValues(arr1) ;
console.log(arr1[0] === 2) ;
console.log(arr1[1] === 1) ;