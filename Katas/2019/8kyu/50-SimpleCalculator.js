/**
 *
 * You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
 *
 * Your function will accept three arguments:
 * The first and second argument will be numbers.
 * The third argument will represent a sign indicating the operation to perform on these two numbers.
 *
 * Example:
 * calculator(1,2,"+"); //=> result will be 3
 * if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

 * Example:
 * calculator(1,2,"&"); //=> result will be "unknown value"
 * calculator(1,"k","*"); //=> result will be "unknown value"
 */

// Test Case
// Test.assertEquals(calculator(1,2,"+"), 3, "calculate");
// Test.assertEquals(calculator(1,2,"-"), -1, "calculate");
// Test.assertEquals(calculator(3,5,"*"), 15, "calculate");
// Test.assertEquals(calculator(6,2,"/"), 3, "calculate");
// Test.assertEquals(calculator(6,2,"$"), "unknown value", "calculate");
// Test.assertEquals(calculator(6,"h","*"), "unknown value", "calculate");

// 实现一个具备加减乘除功能的计算器
// 函数接收三个参数，前两是数字，第三个是操作符
// 根据操作符决定执行哪种操作
// 如果接收的不是数字，或者出现了 + - * / 之外的符号，一律返回unknown value


// 版本1，使用if else
// function calculator(a,b,sign) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         if (sign === '+') {
//             return a + b ;
//         } else if (sign === '-') {
//             return a - b ;
//         } else if (sign === '*') {
//             return a * b ;
//         } else if (sign === '/') {
//             return a / b ;
//         } else {
//             return 'unknown value' ;
//         }
//     } else {
//         return 'unknown value' ;
//     }
//
// }


// 版本2，使用switch case
function calculator(a,b,sign){
    if (typeof a === 'number' && typeof b === 'number') {
        switch (true) {
            case sign === '+':
                return a + b ;
            case sign === '-':
                return a - b ;
            case sign === '*':
                return a * b ;
            case sign === '/':
                if (b === 0) {
                    throw '' ;
                }
                return a / b ;
            default:
                return 'unknown value' ;

        }
    } else {
        return 'unknown value'
    }
}

console.log(calculator(1, 2, '+')) ;
console.log(calculator(1, 2, '-')) ;
console.log(calculator(3, 5, '*')) ;
console.log(calculator(6, 2, '/')) ;
console.log(calculator(6, '4', '+')) ;
console.log(calculator(6, 2, '$')) ;