
// 第一版
// function sumStr(a,b) {
//
//     if (a === '') {
//         a = '0' ;
//     }
//     if (b === '') {
//         b = '0' ;
//     }
//     return String(parseInt(a) + parseInt(b)) ;
//
// }

// 第二版
// function sumStr(a, b) {
//     // Number()构造函数用于将非数字转换为数字
//     // 如果参数无法被转换为数字，则返回 NaN，如foo会被转换为NaN
//     // 空字符串会被转换为0
//     return String(Number(a) + Number(b)) ;
// }

// 第三版
// function sumStr(a, b) {
//     // a是一个字符串，+a可以将字符串形式的a转换为数字（在a能够被转换为数字的情况下），空字符串会被转换为0
//     return '' + (+a + +b) ;
// }

function sumStr(a, b) {
    return String(a * 1 + b * 1) ;
}

console.log(sumStr('3', '4')) ;
console.log(sumStr('34', '5')) ;
console.log(sumStr('', '8')) ;
console.log(sumStr('', '')) ;

