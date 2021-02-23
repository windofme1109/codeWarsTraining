
// 第一版
// String.prototype.digit = function() {
//     var value = this ;
//     // 限定第一位是数字
//     var regex = /^\d{1}/ ;
//     if (value.length === 1) {
//         return regex.test(value) ;
//     } else {
//         return false ;
//     }
// } ;

String.prototype.digit = function() {
    // \d是单个数字匹配，加上限定符^和$,则/^\d{1}$/表示0-9这十个数字
    var regex = /^\d{1}$/ ;
    return regex.test(this) ;
} ;
console.log(''.digit()) ;
console.log('7'.digit()) ;
console.log(' '.digit()) ;
console.log('a'.digit()) ;
console.log('a5'.digit()) ;
console.log('14'.digit()) ;
