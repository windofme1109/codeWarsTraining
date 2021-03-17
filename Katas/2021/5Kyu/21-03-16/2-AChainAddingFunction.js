/**
 *
 * We want to create a function that will add numbers together when called in succession.
 *
 * add(1)(2);
 * // returns 3
 * We also want to be able to continue to add numbers to our chain.
 *
 * add(1)(2)(3); // 6
 * add(1)(2)(3)(4); // 10
 * add(1)(2)(3)(4)(5); // 15
 * and so on.
 *
 * A single call should return the number passed in.
 *
 * add(1); // 1
 * We should be able to store the returned values and reuse them.
 *
 * var addTwo = add(2);
 * addTwo; // 2
 * addTwo + 5; // 7
 * addTwo(3); // 5
 * addTwo(3)(5); // 10
 * We can assume any number being passed in will be valid whole number.
 *
 */

/**
 * 函数的链式调用
 * 链式调用的关键是使用递归，返回函数本身，这样才能实现函数的链式调用
 * 因为还需要将结果保存起来，我们还需要一个变量，保存求和的结果
 * 因此使用闭包，这样就可以保留对这个变量的引用
 *
 * 除了链式调用，还能实现 类似于 add(1)(2)(3)(4) == 10，add(2) + 5 = 7 类似的操作
 * 如果我们强制将一个对象转换为基本数据类型（boolean、number、string），默认地会将其转换为类似于 "[object Object]" 的形式
 * 如果我们给对象添加了一个 valueOf() 的方法，那么进行转换时，就会调用 valueOf()，那么转换后的值就是 valueOf() 的返回值
 *
 * @param x
 * @returns {any}
 */
function add(x) {
    let count = x;

    // 定义一个闭包，并在内部实现递归调用 _sum
    // 因此可以实现链式调用
    let _sum = function (y) {
        count += y;
        return _sum;
    }

    /**
     *
     * @returns {*}
     */
    // _sum.toString = function () {
    //     return count;
    // }

    /**
     * 转换为基本数据类型的时候调用，例如 +、-、*、/，== 等
     * @returns {*}
     */
    _sum.valueOf = function () {
        return count;
    }

    // 首次调用 add，返回 _sum 这个闭包，因此可以实现 _sum() 的链式调用
    return _sum;
}

let ret = add(1);

console.log(ret(4) == 5);
// true
console.log(add(1)(2)(3) == 6);
// 10
console.log(add(1)(2)(3) + 4);
// 3
console.log(add(1)(2)(3) - 3);
// 30
console.log(add(1)(2)(3) * 5);
// 2
console.log(add(1)(2)(3) / 3);
console.log(add(1)(2)(3));

function sub() {
    return 0;

}

sub.toString = function() {
    return '111';
}
sub.valueOf = function() {
    return 222;
}
// console.log(sub)