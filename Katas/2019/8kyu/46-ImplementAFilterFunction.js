/**
 *
 */


// 这里不能使用箭头函数定义
// 因为箭头函数的this指向是定义函数时确定的，也就是函数所在的环境（对象）上
// 而我们给数组原型绑定方法，函数内部使用的this，它的指向是要根据运行时的具体对象而定的
// 因此，这里不能使用箭头函数，而是要使用普通函数
Array.prototype.myFilter = function(callback) {
    var ret = [] ;
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i)) {
            ret.push(this[i]) ;
        }
    }

    return ret ;
}

console.log([1, 2, 3].myFilter((item) => item % 2 === 0)) ;

