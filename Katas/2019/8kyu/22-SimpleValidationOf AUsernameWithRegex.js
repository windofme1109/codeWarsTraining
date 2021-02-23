/**
 * Write a simple regex to validate a username. Allowed characters are:

 * lowercase letters,
 * numbers,
 * underscore
 * Length should be between 4 and 16 characters (both included).
 */

// Test Case
// Test.describe("Basic tests",_=>{
// Test.assertEquals(validateUsr('asddsa'), true);
// Test.assertEquals(validateUsr('a'), false);
// Test.assertEquals(validateUsr('Hass'), false);
// Test.assertEquals(validateUsr('Hasd_12assssssasasasasasaasasasasas'), false);
// Test.assertEquals(validateUsr(''), false);
// Test.assertEquals(validateUsr('____'), true);
// Test.assertEquals(validateUsr('012'), false);
// Test.assertEquals(validateUsr('p1pp1'), true);
// Test.assertEquals(validateUsr('asd43 34'), false);
// Test.assertEquals(validateUsr('asd43_34'), true);
// })
/**
 * 验证用户名
 * @param username
 * @returns {*}
 */
function validateUsr(username) {
    // 定义一个正则表达式，验证用户名
    // 用户名由小写字母、下划线、数字组成
    // 长度在4-16
    // 这里需要加上边界符：^和$,
    //
    var regex = /[0-9a-z_]{4,16}/ ;
    var ret = regex.test(username) ;
    return ret ;
}

// true
console.log(validateUsr('asddsa')) ;
// false
console.log(validateUsr('Hass')) ;
// false
console.log(validateUsr('a')) ;

// false
console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas')) ;

// false
console.log(validateUsr('')) ;
// false
console.log(validateUsr('asd43 34')) ;

// true
console.log(validateUsr('p1pp1')) ;

// false
console.log(validateUsr('012')) ;

// true
console.log(validateUsr('____')) ;
// true
console.log(validateUsr('asd43_34')) ;